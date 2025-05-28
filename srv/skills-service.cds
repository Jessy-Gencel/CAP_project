using my.company.skills from '../db/schema';

service SkillsService {
    @readonly
    entity Skills as projection on skills.EmployeeSkills;
}