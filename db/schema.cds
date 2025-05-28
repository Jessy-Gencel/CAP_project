namespace my.company.skills;


entity EmployeeSkills {
  key ID                  : UUID @(Core.Computed : true);
  attributeExternalId     : String(50) @title:'Skill ID' ;
  personExternalId        : String(50) @title:'Employee ID' ;
  personIdentifierType    : String(50) @title:'ID Type' ;
  proficiencyLevel        : Integer @title:'Proficiency' ;
  proficiencyAssignDate   : DateTime @title:'Assigned Date' ;
  preferenceValue         : Integer @title:'Preference' ;
  status                  : String(20) @title:'Status' ;
  lastModifiedBy          : String(50) @title:'Modified By' ;
  lastModifiedAt          : DateTime @title:'Modified At' ;
  expectedRating          : Integer @title:'Expected Rating' ;
}
