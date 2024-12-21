const people = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      occupation: "Software Engineer",
      contact: {
        email: "john.doe@gmail.com"
      },
      address: {
        street: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zip: "94105"
      },
      social: {
        twitter: "@johndoe"
      },
      hobbies: ["photography"]
    },
    
    {
      id: 2,
      name: 'John Smith',
      age: 35,
      occupation: "Web Engineer",
      contact: {
        email: "john.smith@gmail.com"
      },
      social: {
        twitter: "@johndoe"
      },
      hobbies: ["hiking", "photography"]
    },
    
    {
      id: 3,
      name: 'Will Smith',
      age: 45,
      occupation: "Web Developer",
      contact: {
        email: "will.smith@gmail.com"
      },
      address: {
        street: "126 Main St",
        state: "LA",
        city: "BD",
        zip: "94105"
      },
      social: {
        twitter: "@johndoe"
      },
      hobbies: ["coding", "photography"]
    }
  ]
  
  
  // people.map((person) => {
  //   const sentence = `
  //     person's name is ${person.name}. city: ${person?.address?.city || "N/A"}
  //   `
  //   console.log(sentence);
  // })
  
//   const addr = people.find((person) => person?.address?.city == "BD");
//   console.log(addr);


const peopleList = document.getElementById("people-list");

const personInfo = document.getElementById("person-info");





const renderPeopleList = (people) => {
    people.map((person) => {
      const li = document.createElement("li");
      li.classList.add("cursor-pointer","text-blue-500","p-2");
      li.textContent = person.name;

      li.addEventListener("click", () => {
        handlePersonOnClick(person.id);
      })

      peopleList.appendChild(li);
    })
}

const displayPersonInfo = (person) => {
    personInfo.classList.remove('hidden');
    document.getElementById("no-selection").classList.add('hidden');
    personInfo.innerHTML = `
      <h2 class="text-2xl font-bold mb-2"> ${person.name} </h2>
      <p> City: ${person?.address?.city || "N/A"} </p>
      <p> Hobbies: ${person?.hobbies?.map((hobby) => hobby)} </p>
    `
}


const handlePersonOnClick = (id) => {
  const person = people.find((p) => p.id == id);
  // console.log(person);
  displayPersonInfo(person);
  
}

renderPeopleList(people);
  
  