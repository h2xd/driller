<template>
  <component
    :is="elementToRender"
    :class="[$style.button, $style[variant]]"
    v-bind="linkProps"
    :disabled="disabled"
    @click="onClickHandler"
  >
    <span :class="$style.text">
      <slot />
    </span>
  </component>
</template>

<script lang="ts">
import { RouteRecordRaw, useRouter } from "vue-router";
import { computed, defineComponent, PropType } from "vue";

export enum ButtonVariant {
  PRIMARY = "primary"
}

export default defineComponent({
  props: {
    type: {
      type: String,
      default: "button"
    },
    variant: {
      type: String as PropType<ButtonVariant>,
      default: ButtonVariant.PRIMARY
    },
    href: String,
    to: Object as PropType<RouteRecordRaw>,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const elementToRender = computed(() => {
      if (props.to) {
        return "RouterLink";
      }
      if (props.href) {
        return "a";
      }
      return "button";
    });

    const linkProps = computed(() => {
      if (props.to) {
        return {
          to: props.to
        };
      }

      if (props.href) {
        return {
          href: props.href
        };
      }

      return {
        type: props.type
      };
    });

    const onClickHandler = () => {
      if (props.to) {
        const router = useRouter();
        router.push(props.to);
      }
    };

    return {
      onClickHandler,
      linkProps,
      elementToRender
    };
  }
});
</script>

<style lang="scss" module>
@import "../../styles/vars";

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: $themeSpacingS $themeSpacingXL;
  color: $themeColorBackground100;
  font-weight: 700;
  font-family: inherit;
  white-space: nowrap;
  text-align: center;
  text-decoration: none;
  border: 0;
  border-radius: 50rem;
  cursor: pointer;
  margin-bottom: $themeFontSizeM;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    outline: none;
  }
}

.primary {
  color: $themeColorBackground;
  background-color: $themeColorAccent100;

  &:disabled {
    opacity: 0.5;
  }

  &:hover,
  &:active,
  &:focus {
    &:not([disabled]) {
      //background-color: darken($colorButtonBg, 5);
      //border-color: darken($colorButtonBorderPrimary, 5);
    }
  }
}

.text {
  background-color: transparent;
  border-color: transparent;

  &:disabled {
    //color: $colorBlue100;
  }

  &:hover,
  &:focus,
  &:active {
    &:not([disabled]) {
      //color: $colorBlue100;
    }
  }
}
</style>
