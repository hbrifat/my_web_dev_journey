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
      hobbies: ["coding", "hiking", "photography"]
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
      hobbies: ["coding", "hiking", "photography"]
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
      hobbies: ["coding", "hiking", "photography"]
    }
  ]
  
  
  // people.map((person) => {
  //   const sentence = `
  //     person's name is ${person.name}. city: ${person?.address?.city || "N/A"}
  //   `
  //   console.log(sentence);
  // })
  
  const addr = people.find((person) => person?.address?.city == "BD");
  console.log(addr);
  
  