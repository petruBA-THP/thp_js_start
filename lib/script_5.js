const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function questions(){
    let nonRented=0
    let mostRented=0
    let lessRented=100000000
    let mostRentedTitle=""
    let lessRentedTitle=""
    let removedBook = ""
    let bookId1 = ""
    let book2 = []
    
    for ( let i in books ){
        let obj = books[i]
        if ( obj.rented == 0 ){ non_rented += 1 }
        rentedNb = obj.rented
        rentedTitle = obj.title
        newID = 0
    if ( mostRented < rentedNb ) { mostRented = rentedNb; mostRentedTitle = rentedTitle }
    
    if ( lessRented > rentedNb ) { lessRented = rentedNb; lessRentedTitle = rentedTitle }
    if ( obj.id === 873495 ) { bookId1 = obj.title }
    if ( obj.id === 133712 ) { books.splice([i],1)
            removedBook = obj.title
            }
    book2.push(obj.title)
    if ( obj.id === 133712 ) { book2.splice([i],1) }
    book2.sort()
    }

    console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
    if ( nonRented == 0 ){ console.log("non loué: "+nonRented) 
        } else {
            console.log("Des livres n'ont pas été loué.")
                }
    console.log("Quel est livre le plus emprunté ?")           
    console.log("Le livre le plus emprunté est " + mostRentedTitle + " : " + mostRented )
    console.log("Quel est le livre le moins emprunté ?")
    console.log("Le livre le moins emprunté est " + lessRentedTitle + " : " + lessRented )
    console.log("Trouve le livre avec l'ID: 873495 ;")
    console.log("Le livre avec l'id = 873495 est : " + bookId1)
    console.log("Supprime le livre avec l'ID: 133712 ;")
    console.log("Le livre avec l'id = 133712 est : " + removedBook + " et il a été supprimé")
    console.log(books)
    console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).")
    console.log("Tri par ordre alphabétique : " + book2)
}

questions()
