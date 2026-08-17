import { Profile, promptTemplates, playbooks, weeklyAdoption, departmentCompletion } from "./product";
const wait = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));
const maybeFail = () => { if (typeof navigator !== "undefined" && !navigator.onLine) throw new Error("You appear to be offline. Reconnect and try again."); };
export const mockApi = {
  async dashboard(){ await wait(520); maybeFail(); return {weeklyAdoption,departmentCompletion}; },
  async prompts(){ await wait(420); maybeFail(); return promptTemplates; },
  async playbooks(){ await wait(460); maybeFail(); return playbooks; },
  async saveProfile(profile:Profile){ await wait(650); maybeFail(); if(profile.company.toLowerCase()==="error") throw new Error("We couldn’t save this workspace. Try a different company name."); return profile; },
  async submitAssessment<T>(result:T){ await wait(700); maybeFail(); return result; },
  async generatePrompt(input:string){ await wait(850); maybeFail(); return `Act as a senior workplace AI coach. Context: ${input.trim()} Audience: a busy professional. Constraints: be accurate, concise, and never invent confidential facts. Output: a polished draft followed by three checks before use.`; },
  async checkout(plan:string){ await wait(760); maybeFail(); return `${plan} selected. Your beta workspace has been updated.`; }
};
