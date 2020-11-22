import {calculateBMR} from '@/utils/calculateBMR'
import {Gender} from "@/@types/gender";

const DEFAULT_OPTIONS = {
  weight: 70,
  height: 186,
  age: 24
}

describe('calculate BMR util function', () => {
  it('should calculate bmr based on the option values', () => {
    const bmr = calculateBMR({
      ...DEFAULT_OPTIONS,
      gender: Gender.FEMALE,
    })

    expect(bmr).toBe(1581.5)
  })

  it('should generate diffrent BMR values based on the selected gender', () => {
    const maleBMR = calculateBMR({
      ...DEFAULT_OPTIONS,
      gender: Gender.MALE,
    })

    const femaleBMR = calculateBMR({
      ...DEFAULT_OPTIONS,
      gender: Gender.FEMALE,
    })

    const diversBMR = calculateBMR({
      ...DEFAULT_OPTIONS,
      gender: Gender.DIVERS,
    })


    expect(maleBMR).not.toBe(femaleBMR)
    expect(maleBMR).not.toBe(diversBMR)

    expect(femaleBMR).not.toBe(maleBMR)
    expect(femaleBMR).not.toBe(diversBMR)

    expect(diversBMR).not.toBe(maleBMR)
    expect(diversBMR).not.toBe(femaleBMR)
  })
})