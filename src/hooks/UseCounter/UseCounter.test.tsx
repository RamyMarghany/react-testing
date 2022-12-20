import { renderHook, act } from '@testing-library/react'
import { UseCounter } from './UseCounter'

describe('Test UseCounter custom hook', () => {
  test('render the initial counter value', () => {
    const { result } = renderHook(UseCounter)
    expect(result.current.counter).toBe(0)
  })

  test('render the initial custom counter value', () => {
    const { result } = renderHook(UseCounter, {
      initialProps: {
        initialCounter: 10,
      },
    })
    expect(result.current.counter).toBe(10)
  })

  test('test increment function', () => {
    const { result } = renderHook(UseCounter)
    act(() => result.current.increment())
    expect(result.current.counter).toBe(1)
  })

  test('test decrement function', () => {
    const { result } = renderHook(UseCounter)
    act(() => result.current.decrement())
    expect(result.current.counter).toBe(-1)
  })
})
