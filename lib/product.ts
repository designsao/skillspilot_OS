export const roles = ["Marketing", "Sales", "Operations", "Leadership", "People Ops"] as const;
export type Role = typeof roles[number];
export type Confidence = "Low" | "Medium" | "High";
export type Profile = { fullName:string; email:string; company:string; role:Role; department:Role; teamSize:number; confidence:Confidence; priorityTasks:string[]; privacyPreference:"Standard"|"Restricted" };
export const sampleProfile: Profile = { fullName:"Amina Rahman", email:"amina@northstarlabs.co", company:"Northstar Labs", role:"Marketing", department:"Marketing", teamSize:24, confidence:"Medium", priorityTasks:["Campaign briefs","Performance summaries","Research synthesis"], privacyPreference:"Standard" };
export const navItems = [
  ["dashboard","Overview","⌂"],["onboarding","Onboarding","◎"],["assessment","Assessment","◉"],["playbooks","Playbooks","◇"],["prompts","Prompt library","✦"],["sandbox","Sandbox","⌁"],["team","Team analytics","▥"],["certification","Certification","✓"],["billing","Billing","$"],["settings","Settings","⚙"]
] as const;
export const metrics = [{label:"Readiness score",value:"78"},{label:"Weekly active users",value:"142"},{label:"Hours saved",value:"326"},{label:"Teams onboarded",value:"18"}];
export const weeklyAdoption = [{name:"Mon",value:22},{name:"Tue",value:31},{name:"Wed",value:44},{name:"Thu",value:39},{name:"Fri",value:53},{name:"Sat",value:29},{name:"Sun",value:24}];
export const departmentCompletion = [{name:"Marketing",value:82},{name:"Sales",value:74},{name:"Operations",value:65},{name:"Leadership",value:59}];
export const recommendations: Record<Role,{title:string;type:string;description:string;impact:string}[]> = {
  Marketing:[{title:"Turn one campaign brief into 3 variants",type:"Quick win",description:"Draft audience-specific angles and subject lines.",impact:"15 min saved per brief"},{title:"Prompt for brand-safe content",type:"Skill builder",description:"Preserve tone, claims, and compliance.",impact:"Higher quality outputs"},{title:"Weekly campaign reporting",type:"Workflow",description:"Summarise performance, insights, and next actions.",impact:"2–3 hours saved weekly"}],
  Sales:[{title:"Rewrite outbound for one ICP",type:"Quick win",description:"Create a sharper message in one pass.",impact:"More replies"},{title:"AI-assisted objection handling",type:"Skill builder",description:"Practise responses for common deal blockers.",impact:"Better call confidence"},{title:"Pipeline review workflow",type:"Workflow",description:"Summarise calls and generate next steps.",impact:"1–2 hours saved weekly"}],
  Operations:[{title:"Convert process notes into steps",type:"Quick win",description:"Turn messy text into a clean SOP.",impact:"30 min saved"},{title:"Build safe automation prompts",type:"Skill builder",description:"Create repeatable operational instructions.",impact:"Fewer mistakes"},{title:"Monthly operations reporting",type:"Workflow",description:"Generate summaries and exceptions by theme.",impact:"3 hours saved monthly"}],
  Leadership:[{title:"Summarise a board memo",type:"Quick win",description:"Distil updates into leadership-ready takeaways.",impact:"Faster review"},{title:"Governance and policy basics",type:"Skill builder",description:"Set standards for safe adoption.",impact:"Lower risk"},{title:"Executive decision brief",type:"Workflow",description:"Prepare strategic updates from raw inputs.",impact:"Clearer decisions"}],
  "People Ops":[{title:"Simplify an employee policy",type:"Quick win",description:"Make sensitive content clearer and warmer.",impact:"Less back-and-forth"},{title:"Interview guide generator",type:"Skill builder",description:"Create consistent prompts and scorecards.",impact:"Better consistency"},{title:"Onboarding FAQ workflow",type:"Workflow",description:"Build role-specific guidance from company docs.",impact:"Less support time"}]
};
export const promptTemplates = [
  [1,"Campaign Brief Booster","Marketing","Rewrite this brief into three audience-specific angles, five headlines, and a concise CTA strategy.",4.8],
  [2,"Outbound Email Polish","Sales","Rewrite this outbound email to be shorter, sharper, and tailored to this ICP.",4.7],
  [3,"SOP Formatter","Operations","Turn this rough process note into a clear SOP with steps, owners, and exceptions.",4.9],
  [4,"Board Memo Summary","Leadership","Summarise this memo into executive bullets, risks, decisions, and next actions.",4.6],
  [5,"Policy Simplifier","People Ops","Translate this policy into plain language for employees with a friendly tone.",4.5],
  [6,"Customer Insight Synthesizer","Marketing","Combine this feedback into themes, frequency, and product implications.",4.8],
  [7,"Call Notes Cleaner","Sales","Turn raw call notes into a tidy recap, pain points, and next steps.",4.9],
  [8,"Incident Report Draft","Operations","Generate an incident summary with root cause, impact, and mitigation.",4.4],
  [9,"Weekly Exec Update","Leadership","Summarise weekly activity into wins, risks, blockers, and decisions needed.",4.7],
  [10,"Recruiting Scorecard","People Ops","Build a consistent interview scorecard for this role and level.",4.6],
  [11,"Competitive Research Digest","Marketing","Turn these notes into a competitor summary with positioning insights.",4.5],
  [12,"Follow-up Sequence Builder","Sales","Create a three-step follow-up sequence from this deal context.",4.8]
] as const;
export const playbooks = [
  [1,"Launch campaign workflow","Marketing","Draft and review campaign assets faster",["Define audience and offer","Generate angle variants","Approve brand-safe copy"],"Reduce briefing time by 40%","Easy"],
  [2,"Outbound sequence workflow","Sales","Create structured outreach sequences",["Collect ICP context","Generate opening email","Refine tone and CTA"],"Improve reply quality","Easy"],
  [3,"SOP creation workflow","Operations","Convert messy notes into repeatable SOPs",["Paste raw notes","Ask AI for structure","Add owners and edge cases"],"Save hours on documentation","Medium"],
  [4,"Executive brief workflow","Leadership","Summarise decisions and risks",["Collect updates","Generate executive summary","Highlight risks and asks"],"Faster decisions","Medium"],
  [5,"Onboarding FAQ workflow","People Ops","Create clear support content",["Gather policy inputs","Generate FAQs","Review for clarity"],"Reduce repeat questions","Easy"],
  [6,"Campaign reporting workflow","Marketing","Turn metrics into insights",["Import results","Summarise performance","Generate next actions"],"Save reporting time","Medium"],
  [7,"Call note workflow","Sales","Create CRM-ready updates",["Paste notes","Summarise outcomes","Generate follow-ups"],"Cleaner handoffs","Easy"],
  [8,"Policy governance workflow","Leadership","Set safe usage standards",["Define policy","Create examples","Publish guidance"],"Reduce adoption risk","Advanced"]
] as const;
export const plans = [{name:"Starter",price:19,seats:"Up to 10 seats",features:["Guided onboarding","Prompt library","Readiness assessment"]},{name:"Pro",price:49,seats:"Up to 100 seats",features:["Role playbooks","Practice sandbox","Team analytics"]},{name:"Enterprise",price:0,seats:"Custom",features:["SSO and governance","Custom rollout","Dedicated support"]}];
export function scoreAssessment(values:Record<string,number>){ const vals=Object.values(values); const score=Math.round(vals.reduce((a,b)=>a+b,0)/Math.max(vals.length,1)); return {score,nextAction:score>=80?"Move into workflow automation":score>=60?"Practise prompting and safe usage":"Start with fundamentals and guided practice",breakdown:values}; }
