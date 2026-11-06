import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react'

import './App.css'

function App() {
  const [pracownicy, setPracownicy] = useState([
    {id: 1, imie: "Anna", nazwisko: "Kowalska", dzial: "IT", pensja: 7200},
    {id: 2, imie: "Piotr", nazwisko: "Nowak", dzial: "Sprzedaż", pensja: 5400},
    {id: 3, imie: "Maria", nazwisko: "Wiśniewska", dzial: "Księgowość", pensja: 6100},
    {id: 4, imie: "Jan", nazwisko: "Kowalczyk", dzial: "IT", pensja: 8300},
    {id: 5, imie: "Katarzyna", nazwisko: "Zielińska", dzial: "Sprzedaż", pensja: 5900},
    {id: 6, imie: "Tomasz", nazwisko: "Szymański", dzial: "IT", pensja: 9100},
    {id: 7, imie: "Agnieszka", nazwisko: "Woźniak", dzial: "Księgowość", pensja: 6400},
    {id: 8, imie: "Michał", nazwisko: "Kaczmarek", dzial: "Sprzedaż", pensja: 5200},
    {id: 9, imie: "Magdalena", nazwisko: "Mazur", dzial: "IT", pensja: 7800},
    {id: 10, imie: "Paweł", nazwisko: "Krawczyk", dzial: "Księgowość", pensja: 6000},
    {id: 11, imie: "Joanna", nazwisko: "Piotrowska", dzial: "Sprzedaż", pensja: 5600},
    {id: 12, imie: "Łukasz", nazwisko: "Grabowski", dzial: "IT", pensja: 8700},    
  ])

  const [pomoc, setPomoc] = useState([])
  const [filteredPracownicy, setFilteredPracownicy] = useState(pracownicy)

  const onSzukajChange = (event) => {
    const szukanaFraza = event.target.value.trim();

    if (pracownicy[0].nazwisko.includes(szukanaFraza)){
      setPomoc([...pomoc, pracownicy[0]])
    }
    if (pracownicy[1].nazwisko.includes(szukanaFraza)){
      setPomoc([...pomoc, pracownicy[1]])
    }
    if (pracownicy[2].nazwisko.includes(szukanaFraza)){
      setPomoc([...pomoc, pracownicy[2]])
    }
    if (pracownicy[3].nazwisko.includes(szukanaFraza)){
      setPomoc([...pomoc, pracownicy[3]])
    }
    if (pracownicy[4].nazwisko.includes(szukanaFraza)){
      setPomoc([...pomoc, pracownicy[4]])
    }    
    if (pracownicy[5].nazwisko.includes(szukanaFraza)){
      setPomoc([...pomoc, pracownicy[5]])
    }
    if (pracownicy[6].nazwisko.includes(szukanaFraza)){
      setPomoc([...pomoc, pracownicy[6]])
    }
    if (pracownicy[7].nazwisko.includes(szukanaFraza)){
      setPomoc([...pomoc, pracownicy[7]])
    }
    if (pracownicy[8].nazwisko.includes(szukanaFraza)){
      setPomoc([...pomoc, pracownicy[8]])
    }
    if (pracownicy[9].nazwisko.includes(szukanaFraza)){
      setPomoc([...pomoc, pracownicy[9]])
    }    
    if (pracownicy[10].nazwisko.includes(szukanaFraza)){
      setPomoc([...pomoc, pracownicy[10]])
    }       

    setFilteredPracownicy(pomoc)
    setPomoc([])
  }

  return (
    <div>
      <h2>Pracownicy</h2>
      <div className="mb-3">
        <label htmlFor="szukaj" className="form-label">Szukaj:</label>
        <input type="text" className="form-control" id="szukaj" onChange={onSzukajChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="dzial" className="form-label">Dział:</label>
        <select className="form-select" id="dzial">
          <option value="">Wszystkie</option>
          <option value="IT">IT</option>
          <option value="Sprzedaż">Sprzedaż</option>
          <option value="Księgowość">Księgowość</option>                    
        </select>
      </div>

      <p>Liczba pracowników: {pracownicy.length}</p>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr><th scope="col">Imię</th><th scope="col">Nazwisko</th><th scope="col">Dział</th><th scope="col">Pensja</th></tr>
        </thead>
        <tbody>
          {filteredPracownicy.map(pracownik => (
            <tr key={pracownik.id}>
              <td>{pracownik.imie}</td>
              <td>{pracownik.nazwisko}</td>
              <td>{pracownik.dzial}</td>
              <td>{pracownik.pensja}</td>
            </tr>            
          ))}
        </tbody>
      </table>

      <div className="alert alert-warning" role="alert">Brak pracowników spełniających kryteria</div>

    </div>
  )
}

export default App
