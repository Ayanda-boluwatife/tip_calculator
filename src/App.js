import { useState } from "react"
import logo from "./images/logo.svg"
import dollar from "./images/icon-dollar.svg"
import person from "./images/icon-person.svg"

const App = () => {
  const [bill, setBill] = useState(0.0)
  const [tip, setTip] = useState(5)
  const [people, setPeople] = useState(1)
  const [total, setTotal] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const calculate5 = () => {
    setTip((bill * 5) / 100)
  }

  const calculate10 = () => {
    setTip((bill * 10) / 100)
  }

  const calculate15 = () => {
    setTip((bill * 15) / 100)
  }

  const calculate25 = () => {
    setTip((bill * 25) / 100)
  }

  const calculate50 = () => {
    setTip((bill * 50) / 100)
  }

  // const calculateCustom = () => {
  //   setTip((bill * 5) / 100)
  // }

  const handleReset = () => {
    setBill(0.0)
    setPeople(1)
    setTip(0)
    setTotal(0)
  }

  return (
    <>
      <main>
        <div>
          <img src={logo} alt="splitter" />
        </div>
        <section className="container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="bill">
              <img src={dollar} alt="" />
            </label>
            <input
              type="number"
              id="bill"
              name="bill"
              placeholder="0.0"
              required
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />

            <div className="tip">
              <p>Select Tip %</p>
              <div className="buttons">
                <button onClick={calculate5}>5%</button>
                <button onClick={calculate10}>10%</button>
                <button onClick={calculate15}>15%</button>
                <button onClick={calculate25}>25%</button>
                <button onClick={calculate50}>50%</button>
                <button>Custom</button>
              </div>
              <p>Number of people</p>
              <label htmlFor="person">
                <img src={person} alt="" />
              </label>
              <input
                type="number"
                name="person"
                id="person"
                required
                placeholder="1"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              />
            </div>

            <div className="amount">
              <article>
                <h3>
                  Tip amount <span>/ person</span>
                </h3>
                <p>${tip}</p>
              </article>
              <article>
                <h3>
                  Total <span>/ person</span>
                </h3>
                <p>${total}</p>
              </article>
            </div>
            <input type="reset" value="RESET" onClick={handleReset} />
          </form>
        </section>
      </main>
    </>
  )
}

export default App
