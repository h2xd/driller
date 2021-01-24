/**
 * This implementation of the [Hybric Logical Clocks][1] paper was very much based
 * on [this go implementation][2] and [james long's demo][3]
 *
 * [1]: https://muratbuffalo.blogspot.com/2014/07/hybrid-logical-clocks.html
 * [2]: https://github.com/lafikl/hlc/blob/master/hlc.go
 * [3]: https://github.com/jlongster/crdt-example-app/blob/master/shared/timestamp.js
 */

export type HLC = {
  ts: number;
  count: number;
  node: string;
};

export const pack = ({ ts, count, node }: HLC): string => {
  // 13 digits is enough for the next 100 years, so this is probably fine
  return (
    ts.toString().padStart(15, "0") +
    ":" +
    count.toString(36).padStart(5, "0") +
    ":" +
    node
  );
};

export const unpack = (serialized: string): HLC => {
  const [ts, count, ...node] = serialized.split(":");
  return {
    ts: parseInt(ts),
    count: parseInt(count, 36),
    node: node.join(":")
  };
};

export const initialize = (node: string, now: number = Date.now()): HLC => ({
  ts: now,
  count: 0,
  node
});

export const compare = (one: HLC, two: HLC): number => {
  if (one.ts == two.ts) {
    if (one.count === two.count) {
      if (one.node === two.node) {
        return 0;
      }
      return one.node < two.node ? -1 : 1;
    }
    return one.count - two.count;
  }
  return one.ts - two.ts;
};

export const increment = (local: HLC, now: number = Date.now()): HLC => {
  if (now > local.ts) {
    return { ts: now, count: 0, node: local.node };
  }

  return { ...local, count: local.count + 1 };
};

export const receive = (local: HLC, remote: HLC, now: number): HLC => {
  if (now > local.ts && now > remote.ts) {
    return { ...local, ts: now, count: 0 };
  }

  if (local.ts === remote.ts) {
    return { ...local, count: Math.max(local.count, remote.count) + 1 };
  } else if (local.ts > remote.ts) {
    return { ...local, count: local.count + 1 };
  } else {
    return { ...local, ts: remote.ts, count: remote.count + 1 };
  }
};

export const validate = (
  time: HLC,
  now: number,
  maxDrift: number = 60 * 1000
): string | null => {
  if (time.count > Math.pow(36, 5)) {
    return "counter-overflow";
  }
  // if a timestamp is more than 1 minute off from our local wall clock, something has gone horribly wrong.
  if (Math.abs(time.ts - now) > maxDrift) {
    return "clock-off";
  }
  return null;
};
