
# 8. Стрелочные функции

**Стрелочные функции**, **Лямбда-функции** - одно из самых заметных и в то же время простых для понимания нововведений языка. Основным и, наверное, единственным их отличием от классических функций считается более компактный синтаксис и упрощённая работа с ключевым словом `this`.

## Использование стрелочных функций
Существует два варианта указания стрелочной функции.

### Вариант №1
```typescript
  let a = () => 123
```
В этом варианте функция возвращает числовое значение, хотя ключевое слово `return` отсутствует. Подходит для функций-однострочек, когда можно указать один оператор (statement) и тут же его вернуть. Например, может использоваться в функциях манипуляции элементами массива:

```typescript
  [1, 2, 3].map(a => a + 1); // [2, 3, 4]
```

### Вариант №2
```typescript
  let a = () => {
    return 123;
  }
```
Этот вариант ведёт себя точно так же, как предыдущий, только позволяет указывать уже полноценный алгоритм внутри функции. Однако здесь необходимо ключевое слово `return`.

Стоит отметить, что в обоих случаях круглые скобки необязательны только в случае, если мы объявляем только один аргумент без указания типа. В случае отсутствия аргументов, в случае объявления типа аргумента или в случае большего числа аргументов скобки нужны.

```typescript
  [1, 2, 3].map((a, i) => a + 1); // [2, 3, 4]
  [1, 2, 3].map(() => 0); // [0, 0, 0]
```

### Стоит просто запомнить
Одно из частых допущений случается, когда нужно вернуть пустой объект `{}` из стрелочной функции, но получается так, что возвращается `undefined`. Почему так происходит?

```typescript
  let fn = () => {};
```
На первый невнимательный взгляд может показаться, что это короткая запись стрелочной функции из первого варианта, однако интерпретатор расценивает это как полноценную лямбду с пустым блоком без ключевого слова `return`. В этом случае функция вернёт `undefined`, т.к. в классическом виде она выглядит как `function () {}`;

```typescript
  let fn = () => {a: 1};
```

Такая запись, кстати тоже не прокатит, потому как эти брюки превращаются в `function () { a: 1 }`. И, что на первый взгляд может показаться удивительным, синтаксической ошибки в обоих случаях не будет, хотя интуитивно кажется, что она должна быть. Это происходит потому, что `JS` поддерживает метки. В данном случае `a:` - это метка, а `1` это оператор (statement).

Решение этой ситуации простое до безобразия:
```typescript
  let fn = () => ({});
  let fn = () => ({a: 1});
```
Мы просто оборачиваем наш объект в круглые скобки и радуемся жизни. Выглядит уже не так изящно, но если сильно нужно, можно, например, положить пустой объект в глобальную переменную и возвращать эту переменную *(а чё бы нет?)*

```typescript
  let empty = {};
  let fn = () => empty;
```

В общем, эти два правила как русское `победю/побежу` - нужно просто запомнить их и не мучить себя лишними вопросами, несмотря даже на то, что в начале этой статьи я писал, что это нововведение довольно просто для понимания.