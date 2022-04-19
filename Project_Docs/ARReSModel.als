sig Student{ 
    creates: set Application,
    completes: set Application
    } 

sig Professor{ 
    initializes: set Research,
    read: set Application 
    }

sig Research{ 
    holds: set Application 
    } 

sig Application{} {
       this in (Student.creates + Student.completes)
}


fact ProfessorMinimun{
     #Professor>0
}
fact StudentMinimun{
     #Student>0
}

fact ProfessorCreatesResearch {
	Research in Professor.initializes
}

fact ResearchIsUnique {
	~initializes in Research -> one Professor
}

fact ProfessorCanReadApplication {
	Application in Professor.read
}

fact StudentCreatesApplication {
	Application in Student.creates
}

fact StudentCompletesApplication {
	Application in Student.completes
}

fact CompletedApplicationMustBeDifferent {
	all c: Student, j: Application | j in c.creates & c.completes => ~completes in Application -> one Student
}

fact ApplicationIsUnique{
    ~creates & ~completes in Application -> one Student
}

fact ApplicationsAreInResearch {
	Application in Research.holds
}

fact ApplicationUniqueToResearch {
	~holds in Application -> one Research
}

fact ApplicationIsUniqueToStudent{
    all s1: Student, s2: Student | s1 != s2 =>
        s1.creates not in (s2.creates + s2.completes) && s1.completes not in (s2.creates + s2.completes)
    }



run { } for 10 but exactly 2 Student, 2 Application, 2 Research, 1 Professor