//  Налаштування
/* Збірка записів
Вам наданий літерал об'єкту, який є частиною вашої збірки музичних альбомів. Кожен альбом має свій унікальний ідентифікаційний номер та декілька інших властивостей. Не всі альбоми мають повну інформацію.

Ви починаєте з функції updateRecords, яка приймає літерал об'єкту records, який містить колекцію музичного альбому, id, prop (такі як artist чи tracks), і value. Завершіть функцію, використовуючи правила нижче, щоб змінити об'єкт, переданий до функції.

Ваша функція повинна завжди повертати весь об'єкт збірки записів.
Якщо prop це не tracks і value не є пустим рядком, то оновіть або встановіть prop альбому до value.
Якщо prop є tracks але альбом немає властивості tracks, створіть пустий масив та додайте value до нього.
Якщо prop є tracks та value не є пустим рядком, додайте value до кінця наявного масиву tracks у альбомі.
Якщо value є пустим рядком, видаліть дану властивість prop з альбому.
Note: Копія об'єкту recordCollection використовується для тестування.*/

// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// // Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {
//   // Access target album in record collection
//   const album = records[id];

//   // Якщо значення є порожнім рядком,
//   // видалити задану властивість проп з альбому
//   if (value === "") {
//     delete album[prop];
//   }
//   // Якщо властивість не треки,
//   // оновити або встановити проп цього альбому на значення
//   else if (prop !== "tracks") {
//     album[prop] = value;
//   }
//   // Якщо властивістю є треки,
//   // додати значення в кінець наявного масиву треків альбому
//   else {
//     album["tracks"] = album["tracks"] || [];
//     album["tracks"].push(value);
//   }

//   return records;
// }

// updateRecords(recordCollection, 5439, "artist", "ABBA");
// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

/* 

*/
// const myArray = [];
// let i = 10;

// do {
//   myArray.push(i);
//   i++;
// } while (i <= 10);

// function sum(arr, n) {
//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
// }
// console.log(sum([2, 3, 4, 5], 3));
