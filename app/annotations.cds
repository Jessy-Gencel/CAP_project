using SkillsService as service from '../srv/skills-service';
annotate service.Skills with @(
    UI.SelectionFields : [
        proficiencyLevel,
        status,
        proficiencyAssignDate,
    ]
);

