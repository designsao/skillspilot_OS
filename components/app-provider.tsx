"use client";
import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { Profile, sampleProfile } from "@/lib/product";

type State={ profile:Profile; assessment:{score:number;nextAction:string;breakdown:Record<string,number>}|null; savedPrompts:number[]; savedWorkflows:number[]; certification:number; plan:string; hydrated:boolean };
type Action={type:"hydrate";payload:Partial<State>}|{type:"profile";payload:Profile}|{type:"assessment";payload:NonNullable<State["assessment"]>}|{type:"prompt";payload:number}|{type:"workflow";payload:number}|{type:"certification";payload:number}|{type:"plan";payload:string}|{type:"reset"};
const initial:State={profile:sampleProfile,assessment:null,savedPrompts:[],savedWorkflows:[],certification:1,plan:"Starter",hydrated:false};
function reducer(s:State,a:Action):State{ switch(a.type){case"hydrate":return{...s,...a.payload,hydrated:true};case"profile":return{...s,profile:a.payload};case"assessment":return{...s,assessment:a.payload};case"prompt":return{...s,savedPrompts:Array.from(new Set([...s.savedPrompts,a.payload]))};case"workflow":return{...s,savedWorkflows:Array.from(new Set([...s.savedWorkflows,a.payload]))};case"certification":return{...s,certification:a.payload};case"plan":return{...s,plan:a.payload};case"reset":return{...initial,hydrated:true};} }
const Ctx=createContext<{state:State;dispatch:React.Dispatch<Action>}|null>(null);
export function AppProvider({children}:{children:React.ReactNode}){ const [state,dispatch]=useReducer(reducer,initial); useEffect(()=>{try{const raw=localStorage.getItem("skillpilot.beta");dispatch({type:"hydrate",payload:raw?JSON.parse(raw):{}})}catch{dispatch({type:"hydrate",payload:{}})}},[]); useEffect(()=>{if(state.hydrated)localStorage.setItem("skillpilot.beta",JSON.stringify({...state,hydrated:undefined}))},[state]); const value=useMemo(()=>({state,dispatch}),[state]); return <Ctx.Provider value={value}>{children}</Ctx.Provider> }
export function useApp(){const value=useContext(Ctx);if(!value)throw new Error("useApp must be used within AppProvider");return value;}
