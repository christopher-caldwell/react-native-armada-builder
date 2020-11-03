import { useState, Dispatch, SetStateAction } from 'react'

interface UseInputReturn {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  reset: () => void
  bind: {
    value: string
    onChangeText: (text: string) => void
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
      onChangeText: text => {
        setValue(text)
      },
    },
  }
}
