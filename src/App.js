import './App.css'
import Tabs from './Tabs'
import LayoutCentered from './LayoutCentered'

const tabs = [
  {
    text: 'SoftSkils',
    renderContent: () => (
      <LayoutCentered>
        <span>SoftSkils</span>
      </LayoutCentered>
    ),
  },
  {
    text: 'HardSkils',
    renderContent: () => (
      <LayoutCentered>
        <span>HardSkils</span>
      </LayoutCentered>
    ),
  },
  {
    text: 'Education',
    renderContent: () => (
      <LayoutCentered>
        <span>Education</span>
      </LayoutCentered>
    ),
  },
  {
    text: 'Contacts',
    renderContent: () => (
      <LayoutCentered>
        <span>Contacts</span>
      </LayoutCentered>
    ),
  }
]

function App() {
  return (
    <div className="app__main-container">
      <div className="app__title-container">Tabs Component</div>
      <div className="app__content-container">
        <Tabs tabs={tabs} />
      </div>
    </div>
  )
}

export default App