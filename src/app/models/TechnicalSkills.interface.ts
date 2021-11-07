interface TechnicalSkills {
  [key: string]: Array<string>;
}

export interface TechnicalSkillsInterface extends TechnicalSkills {
  programming: Array<string>;
  versionControlSystems: Array<string>;
  databases: Array<string>;
  systems: Array<string>;
  services: Array<string>;
}
