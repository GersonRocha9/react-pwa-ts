# Usando Tailwind:

```

 interface Person {
   name: string
   age: number
 }


const [name, setName] = useState('')
const [age, setAge] = useState(0)
const [people, setPeople] = useState<Person[]>([])
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault()
setPeople([...people, { name, age }])
localStorage.setItem('people', JSON.stringify([...people, { name, age }]))
setName('')
setAge(0)
}
useEffect(() => {
const people = localStorage.getItem('people')
if (people) {
setPeople(JSON.parse(people))
}
}, [])
return (

 <div className="flex flex-col items-center justify-center bg-zinc-900 h-screen">
 <h1 className="text-4xl font-bold text-white">Cadastrar pessoa</h1>
 <form
 onSubmit={handleSubmit}
 className="flex flex-col items-center border border-gray-200 p-4 rounded-md gap-4 mt-4"
 >
 <input
 type="text"
 value={name}
 onChange={(e) => setName(e.target.value)}
 placeholder="Nome"
 className="bg-gray-200 px-4 py-2 w-80 rounded-md"
 />
 <input
 type="number"
 value={age === 0 ? '' : age}
 onChange={(e) => setAge(Number(e.target.value))}
 placeholder="Idade"
 className="bg-gray-200 px-4 py-2 w-80 rounded-md"
 />
 <button
 type="submit"
 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
 >
 Submit
 </button>
 </form>
 <div className="mt-4">
 {people.map((person, index) => (
 <div key={index} className="flex items-center gap-4">
 <h1 className="text-2xl font-bold text-white">{person.name}</h1>
 <h1 className="text-2xl font-bold text-white">{person.age}</h1>
 </div>
 ))}
 </div>
 </div>
```
