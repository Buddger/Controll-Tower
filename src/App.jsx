import { useState } from 'react'
import Header from './components/Header.jsx'
import FilterBar from './components/FilterBar.jsx'
import KpiCard from './components/KpiCard.jsx'
import Worklist from './components/Worklist.jsx'
import Journey from './components/Journey.jsx'
import ExceptionProfile from './components/ExceptionProfile.jsx'
import ActionPage from './components/ActionPage.jsx'
import { filters,kpis,references,exceptionGroups,journey } from './data/mockData.js'

export default function App(){
 const [activeReference,setActiveReference]=useState(null)
 return <div className="app-shell"><Header/>{activeReference?<ActionPage reference={activeReference} onBack={()=>setActiveReference(null)}/>:<main className="dashboard"><FilterBar filters={filters}/><section className="kpi-grid">{kpis.map(k=><KpiCard key={k.label}{...k}/>)}</section><section className="dashboard-grid"><div className="main-column"><Worklist references={references} onOpen={setActiveReference}/><Journey journey={journey}/></div><ExceptionProfile groups={exceptionGroups}/></section></main>}</div>
}
