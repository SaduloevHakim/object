let user = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30,        // под ключом "age" хранится значение 30
    "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
  };


  user.isTeacher = "Yes"
  user["isStudent"] = "No"

  delete user.age;

  console.log(user);