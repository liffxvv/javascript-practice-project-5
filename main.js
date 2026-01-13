let users = {
    
}

for (var i = 0; i <= 10; i++) {
   let name = prompt('введите имя')
    let age = +prompt('введите возраст')
    users = {
        name: name,
        age: age
    }
        console.log(`пользователь - ${i}`);
        console.log(`имя - ${users.name}`);
        console.log(`возраст - ${users.age}`);   
}
