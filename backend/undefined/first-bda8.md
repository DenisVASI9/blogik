Перед вами пример типичной, христоматийной сортировки, называемой - пузырьковая.

Давайте посмотрим реализацию на typescript 

```typescript
const array: number[] = [123, 123, 134]

for (let i = 0; i < array.length; i++) {
    for (let j = 0; array.length; j++) {
        if (array[i] < array[j]) {
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
}
```