var db = [
  {
    "id": "1",
    "name": "The Devil's Advocate",
    "synopsis": "A hotshot lawyer gets more than he bargained for when he learns his new boss is Lucifer himself.",
    "comments": []
  },
  {
    "id": "2",
    "name": "Dick Tracy",
    "synopsis": "The comic strip detective finds his life vastly complicated when Breathless Mahoney makes advances towards him while he is trying to battle Big Boy Caprice's united mob.",
    "comments": [
      { "user": "jose", "text": "la ví cuando era muy chico y me pareció aburrida" }
    ]
  },
  {
    "id": "3",
    "name": "Brasco",
    "synopsis": "An FBI undercover agent infilitrates the mob and finds himself identifying more with the mafia life to the expense of his regular one.",
    "comments": []
  },
  {
    "id": "4",
    "name": "The Godfather",
    "synopsis": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    "comments": []
  }
];

db.getById = function (id) {
  return this.filter(function (movie){
    return movie.id === id;
  })[0];
};

module.exports = db;