// обычная стрелочная функция
const multiplyValues = (a: number, b: number) => {
    return a * b;
}
console.log(multiplyValues(15, 24))

// стрелочная функция с указанием, каким типом должно быть возвращаемое значение ( string в нашем случае )
const concatValues = (a: string, b: string): string => {
    return a + b;
}
console.log(concatValues("hello", "!"))


// описать форму того, как будет выглядеть объект
// readonly делает поле как ни странно только для чтения
interface Pizza {
    ingredients: Array<string>,
    readonly name: string
};

// создание объекта, который соответствует форме Pizza
const pizza: Pizza = {
    ingredients: ['ketchup', 'cheese', 'sausages'],
    name: 'Pizza name'
};

// неправильно созданный объект ( вместо поля pizza_name в форме используется name )
// const wrong_pizza: Pizza = {
//     ingredients: ['cheese'],
//     pizza_name: 'New name'
// }


// использование интерфейсов с классами
// поле с вопросом означает, что он не обязателен
interface User {
    username: string,
    email: string,
    id: number,
    age?: number
};

class UserAccount {
    username: string;
    email: string;
    id: number;

    constructor(username: string, email: string, id: number) {
        this.username = username;
        this.email = email;
        this.id = id;
    }
};

const user = new UserAccount('Nick', 'nick@gmail.com', 1);

// создание сложных типов при помощи объединений ( | - или, & - и )
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// создание сложных типов при помощи обобщений
// Распространенным примером является массив. Массив с обобщениями может описывать значения, которые содержит массив.
type StringArray = Array<string>; 
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
