const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Les frères Karamazov', id: 450911, rented: 0 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
  
  console.log("QUESTION: Were all the books rented at least once?")
  for(i = 0; i < books.length; i++){
    if (books[i]["rented"] > 1){
      console.log(books[i]["title"] + " was rented at least once");
    } else {
      console.log("This book was never rented.");
    }
    // Use of ternary
    //(books[i]["rented"] > 1) ? console.log(books[i]["title"] + " was rented at least once"):console.log("This book was never rented.");
  }
  
  console.log("QUESTION: Which book was rented the most?");
  let rentedTheMost = "";
  let j = 0;
  books.forEach(book => {
    if(book.rented > j){
      j = book.rented;
      rentedTheMost = book.title;
    }
  });
  console.log(rentedTheMost);
  
  console.log("QUESTION: Which book was the least rented?");
  let rentedBooks = books.sort( (a, b) => {
    return a.rented - b.rented;
  });
  console.log(rentedBooks[0].title);
  
  console.log("QUESTION: Find the book with ID:873495");
  let idBook = books.find(item => item.id === 873495);
  console.log(`The book with the ID: 873495 is ${idBook.title}`);
  
  console.log("QUESTION: Delete the book with ID:133712 ");
  let deleteBooks = books.findIndex(item => item.id === 133712);
  if(deleteBooks > -1){
    books.splice(deleteBooks, 1);
  }
  console.log(books);
  
  console.log("QUESTION: Sort books in alphabetical order");
  books.sort((a, b) => {
    return a.title > b.title;
  });
  console.log(books);