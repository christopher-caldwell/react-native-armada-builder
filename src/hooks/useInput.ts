import { useState, Dispatch, SetStateAction } from 'react'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

interface UseInputReturn {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  reset: () => void
  bind: {
    value: string
    onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void
  }
}
export const useInput = (initialValue: string): UseInputReturn => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value)
      },
    },
  }
}
