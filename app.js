const EMBEDDED_COURSES = [{"department": "PHYSICS", "code": "COMPY02", "section": "N30", "faculty": "Dr. Jude Antenorcruz", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "C314", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "COMPY03", "section": "N30", "faculty": "Dr. Joaquin Moreno", "day": "MH", "days": ["MON", "THU"], "time": "11:00-12:30", "room": "C314", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "CLAME01", "section": "N41", "faculty": "Dr. Maria Carla Manzano", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "M305", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "ELECP01", "section": "N03", "faculty": "Dr. Wilfred Espulgar", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "J307", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "ELECP01", "section": "N04", "faculty": "Dr. Emmanuel Rodulfo", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "J307", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "HLTHP01", "section": "N01", "faculty": "Ramon Cruzpero", "day": "TF", "days": ["TUE", "FRI"], "time": "18:00-19:30", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "PHYSB03", "section": "N01A", "faculty": "Dr. Chris Que", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "J307", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "PHYSB03", "section": "N02A", "faculty": "Lester Bernardino", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "J307", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "PHYSC03", "section": "M01", "faculty": "Dr. Ofelia Rempillo", "day": "MH", "days": ["MON", "THU"], "time": "11:00-12:30", "room": "J307", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "PHYS00D", "section": "N40", "faculty": "Dr. Jeric Garrido", "day": "FRIDAY", "days": ["FRI"], "time": "14:30-15:30", "room": "M305", "enrollCap": "", "mode": "F2F", "restricted": false}, {"department": "PHYSICS", "code": "PHYS003", "section": "N32", "faculty": "Dr. Edwin Lombridas", "day": "THURSDAY", "days": ["THU"], "time": "12:45-13:45", "room": "Y609", "enrollCap": "30", "mode": "F2F", "restricted": false}, {"department": "PHYSICS", "code": "PHYMT01", "section": "N40", "faculty": "Russel Ong", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "M304", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "PHYSICS", "code": "MTSCI02", "section": "N30", "faculty": "Dr. Eugene Ragasa", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "L309", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "MTSCI04", "section": "N33", "faculty": "Dr. Joaquin Moreno", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "Y305", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "PHOTO01", "section": "N40", "faculty": "Dr. Christopher Que", "day": "MH", "days": ["MON", "THU"], "time": "16:15-17:45", "room": "J303", "enrollCap": "40", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "RDBIO1", "section": "N40", "faculty": "Dr. Jowi Cruz", "day": "MH", "days": ["MON", "THU"], "time": "18:00-19:30", "room": "V207", "enrollCap": "40", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "RDBIO1", "section": "N41", "faculty": "Dr. Jowi Cruz", "day": "MH", "days": ["MON", "THU"], "time": "18:00-19:30", "room": "V207", "enrollCap": "40", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "SENSR01", "section": "N40", "faculty": "Dr. Wilfred Espulgar", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "V306", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "SOLST01", "section": "N31", "faculty": "Dr. Eugene Ragasa", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "Y305", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "QUAME01", "section": "N31", "faculty": "Dr. Edwin Lombridas", "day": "MH", "days": ["MON", "THU"], "time": "11:00-12:30", "room": "Y609", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "LBYP03C", "section": "N25A", "faculty": "Jejomar Bulan", "day": "WEDNESDAY", "days": ["WED"], "time": "09:30-12:30", "room": "J403", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYP03C", "section": "M25B", "faculty": "Kyle Alfred Paz", "day": "WEDNESDAY", "days": ["WED"], "time": "09:30-12:30", "room": "J405", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYP03B", "section": "N25A", "faculty": "Russel Ong", "day": "THURSDAY", "days": ["THU"], "time": "09:30-12:30", "room": "J302", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYP03B", "section": "N25B", "faculty": "Jejomar Bulan", "day": "THURSDAY", "days": ["THU"], "time": "09:30-12:30", "room": "J403", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYP03B", "section": "N26A", "faculty": "Dr. Jeric Garrido", "day": "FRIDAY", "days": ["FRI"], "time": "09:30-12:30", "room": "J403", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYP03B", "section": "N26B", "faculty": "Russel Ong", "day": "FRIDAY", "days": ["FRI"], "time": "09:30-12:30", "room": "J302", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYPH01", "section": "N25A", "faculty": "Raiseth Fajardo", "day": "THURSDAY", "days": ["THU"], "time": "09:30-12:30", "room": "J413", "enrollCap": "24", "mode": "", "restricted": false}, {"department": "PHYSICS", "code": "LBBPH05", "section": "N25A", "faculty": "Dr. Maria Carla Manzano", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "J413", "enrollCap": "25", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "LBYPH08", "section": "N25A", "faculty": "Dr. Christopher Que", "day": "FRIDAY", "days": ["FRI"], "time": "11:00-14:00", "room": "J403", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYPH0S", "section": "N25A", "faculty": "Dr. Wilfred Espulgar", "day": "THURSDAY", "days": ["THU"], "time": "14:30-17:30", "room": "J406", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYPH0C", "section": "N25A", "faculty": "Floro Roque", "day": "THURSDAY", "days": ["THU"], "time": "09:30-12:30", "room": "J405", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYPH0C", "section": "N25B", "faculty": "Dr. James Olarve", "day": "THURSDAY", "days": ["THU"], "time": "09:30-12:30", "room": "J411", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYPH0C", "section": "N26A", "faculty": "Floro Roque", "day": "FRIDAY", "days": ["FRI"], "time": "09:30-12:30", "room": "J405", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYPH0C", "section": "N26B", "faculty": "Dr. James Olarve", "day": "FRIDAY", "days": ["FRI"], "time": "09:30-12:30", "room": "J411", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N17", "faculty": "Edgar Vallar", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-20:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N54", "faculty": "Jowi Tsikednu Cruz", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-20:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N55", "faculty": "Melsa Rose Ducut", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-20:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N52", "faculty": "Wilfred Espulgar", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-20:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N19", "faculty": "Romeric Pobre", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-20:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N51", "faculty": "Ofelia Rempillo", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-20:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N20", "faculty": "Maria Carla Manzano", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-19:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N11", "faculty": "Gil Nonato Santos", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-19:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N53", "faculty": "Jude Antenorcruz", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-19:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP02", "section": "N52", "faculty": "Wilfred Espulgar", "day": "SATURDAY", "days": ["SAT"], "time": "19:00-20:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "PHYSICS", "code": "RESAP02", "section": "N20", "faculty": "Maria Carla Manzano", "day": "SATURDAY", "days": ["SAT"], "time": "19:00-20:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP02", "section": "N53", "faculty": "Jude Antenorcruz", "day": "SATURDAY", "days": ["SAT"], "time": "19:00-20:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP03", "section": "N20", "faculty": "Maria Carla Manzano", "day": "SATURDAY", "days": ["SAT"], "time": "20:15-22:15", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP03", "section": "N53", "faculty": "Jude Antenorcruz", "day": "SATURDAY", "days": ["SAT"], "time": "20:15-22:15", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "PYSEM01", "section": "N19", "faculty": "Romeric Pobre", "day": "SUNDAY", "days": ["SUN"], "time": "09:00-09:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "PYSEM01", "section": "N20", "faculty": "Maria Carla Manzano", "day": "SUNDAY", "days": ["SUN"], "time": "09:00-09:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "PYSEM01", "section": "N53", "faculty": "Jude Antenorcruz", "day": "SUNDAY", "days": ["SUN"], "time": "09:00-09:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY01", "section": "N19", "faculty": "Romeric Pobre", "day": "SUNDAY", "days": ["SUN"], "time": "10:00-10:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY01", "section": "N52", "faculty": "Wilfred Espulgar", "day": "SUNDAY", "days": ["SUN"], "time": "10:00-10:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY01", "section": "N20", "faculty": "Maria Carla Manzano", "day": "SUNDAY", "days": ["SUN"], "time": "10:00-10:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY01", "section": "N11", "faculty": "Gil Nonato Santos", "day": "SUNDAY", "days": ["SUN"], "time": "10:00-10:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY01", "section": "N16", "faculty": "Michelle Natividad", "day": "SUNDAY", "days": ["SUN"], "time": "10:00-10:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY01", "section": "N02", "faculty": "Al Rey Villagracia", "day": "SUNDAY", "days": ["SUN"], "time": "10:00-10:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY01", "section": "N55", "faculty": "Melsa Rose Ducut", "day": "SUNDAY", "days": ["SUN"], "time": "10:00-10:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY01", "section": "N53", "faculty": "Jude Antenorcruz", "day": "SUNDAY", "days": ["SUN"], "time": "10:00-10:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY02", "section": "N20", "faculty": "Maria Carla Manzano", "day": "SUNDAY", "days": ["SUN"], "time": "11:00-11:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY02", "section": "N11", "faculty": "Gil Nonato Santos", "day": "SUNDAY", "days": ["SUN"], "time": "11:00-11:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY02", "section": "N53", "faculty": "Jude Antenorcruz", "day": "SUNDAY", "days": ["SUN"], "time": "11:00-11:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY03", "section": "N15", "faculty": "Maria Cecilia Galvez", "day": "SUNDAY", "days": ["SUN"], "time": "12:00-12:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY03", "section": "N20", "faculty": "Maria Carla Manzano", "day": "SUNDAY", "days": ["SUN"], "time": "12:00-12:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY03", "section": "N11", "faculty": "Gil Nonato Santos", "day": "SUNDAY", "days": ["SUN"], "time": "12:00-12:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY03", "section": "N16", "faculty": "Michelle Natividad", "day": "SUNDAY", "days": ["SUN"], "time": "12:00-12:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY03", "section": "N02", "faculty": "Al Rey Villagracia", "day": "SUNDAY", "days": ["SUN"], "time": "12:00-12:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY03", "section": "N53", "faculty": "Jude Antenorcruz", "day": "SUNDAY", "days": ["SUN"], "time": "12:00-12:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "PRCPHYS", "section": "N80", "faculty": "Maria Cecilia Galvez", "day": "SUNDAY", "days": ["SUN"], "time": "14:30-16:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "PRCPHYS", "section": "N70", "faculty": "Maria Carla Manzano", "day": "SUNDAY", "days": ["SUN"], "time": "14:30-16:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "PRCPHYS", "section": "N94", "faculty": "Jude Antenorcruz", "day": "SUNDAY", "days": ["SUN"], "time": "14:30-16:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "PRCPHYS", "section": "N89", "faculty": "Gil Nonato Santos", "day": "SUNDAY", "days": ["SUN"], "time": "14:30-16:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "MATH & STATS", "code": "MTH122A", "section": "N45", "faculty": "TAN, SONIA Y.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "M304", "enrollCap": "45", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH132A", "section": "N40", "faculty": "CARPIO, KRISTINE JOY E.", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "J303", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH131A", "section": "N40", "faculty": "CONCEPCION, EDWARD ROY", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH202A", "section": "N40", "faculty": "GARCIA, MARK ANTHONY A.", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "14:30-15:30", "room": "M304", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH202A", "section": "N41", "faculty": "GARCIA, MARK ANTHONY A.", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "11:00-12:00", "room": "M304", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH210A", "section": "N40", "faculty": "MORALES, JOHN VINCENT S.", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "09:15-10:45", "room": "J303", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH220A", "section": "M40", "faculty": "SAY-AWEN, APRIL LYNNE", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "09:15-10:45", "room": "M304", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH224A", "section": "N41", "faculty": "CAMPENA, FRANCIS JOSEPH H.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "M305", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH225A", "section": "N40", "faculty": "GERVACIO, SEVERINO V.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "ONLINE", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH242A", "section": "N30", "faculty": "LAO, ANGELYN R.", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "11:00-12:30", "room": "L309", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH243A", "section": "N29", "faculty": "FORTUN, NOEL T.", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "Y609", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH245A", "section": "N25", "faculty": "REYES, JOSE TRISTAN F.", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "09:15-10:45", "room": "Y609", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH253A", "section": "N32", "faculty": "GARCIA, MARK ANTHONY A.", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "16:15-17:45", "room": "G404A", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH254A", "section": "N27", "faculty": "NOCON, EDERLINA G.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "Y609", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH258A", "section": "N42", "faculty": "COLLADO, KARL MAN S.", "day": "MT", "days": ["MON", "TUE"], "time": "14:30-16:00", "room": "M315", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT163A", "section": "N30", "faculty": "MOJICA, VIO JIANU C.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-09:00", "room": "G404A", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT203A", "section": "N31", "faculty": "OCAMPO, SHIRLEE S.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "G404A", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT224A", "section": "N41", "faculty": "BONZO, DANIEL ISIDORE BRIAN", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "07:30-09:00", "room": "ONLINE", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT241A", "section": "N30", "faculty": "MOJICA, VIO JIANU C.", "day": "WS", "days": ["WED", "SAT"], "time": "09:15-11:15", "room": "G404A", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT265A", "section": "N30", "faculty": "CO, FRUMENCIO F.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "C314", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT304A", "section": "N40", "faculty": "TRESVALLES, REGINA M.", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "14:30-16:00", "room": "M305", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT304A", "section": "N41", "faculty": "TRESVALLES, REGINA M.", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "12:45-14:15", "room": "M305", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT321A", "section": "N31", "faculty": "CO, FRUMENCIO F.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "C314", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT151A", "section": "N30", "faculty": "CO, FRUMENCIO F.", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "G404A", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT151A", "section": "N31", "faculty": "CO, FRUMENCIO F.", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "C314", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT151A", "section": "N32", "faculty": "ALBERTO, ANGELO M.", "day": "TF", "days": ["TUE", "FRI"], "time": "16:15-17:45", "room": "C314", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT151A", "section": "N33", "faculty": "CO, FRUMENCIO F.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-12:30", "room": "C314", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT151A", "section": "N34", "faculty": "OCAMPO, SHIRLEE S.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "G404A", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT151A", "section": "N35", "faculty": "LEONG, ROBERT NEIL F.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "C314", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT151A", "section": "N36", "faculty": "LEONG, ROBERT NEIL F.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "G404A", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH121A", "section": "N40", "faculty": "CARPIO, KRISTINE JOY E.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "M305", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH123A", "section": "N40", "faculty": "MENGORIO, JOSHUA R.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "M306", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH124A", "section": "N40", "faculty": "DE LARA, MARK LEXTER", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "M315", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH101A", "section": "N01", "faculty": "CONCEPCION, EDWARD ROY", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:15", "room": "ONLINE", "enrollCap": "45", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH201A", "section": "N40", "faculty": "CONCEPCION, EDWARD ROY", "day": "MH", "days": ["MON", "THU"], "time": "11:00-12:00", "room": "ONLINE", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT222A", "section": "N40", "faculty": "COLLADO, KARL MAN S.", "day": "MH", "days": ["MON", "THU"], "time": "16:15-17:45", "room": "J303", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH300A", "section": "N25", "faculty": "SABANGAN, ALELIE", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT1", "section": "N01", "faculty": "CO, FRUMENCIO F.", "day": "TF", "days": ["TUE", "FRI"], "time": "16:15-17:45", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT2", "section": "N01", "faculty": "CO, FRUMENCIO F.", "day": "SATURDAY", "days": ["SAT"], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT2", "section": "N09", "faculty": "OCAMPO, SHIRLEE S.", "day": "SATURDAY", "days": ["SAT"], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT2", "section": "N17", "faculty": "LEONG, ROBERT NEIL F.", "day": "SATURDAY", "days": ["SAT"], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT2", "section": "N22", "faculty": "TRESVALLES, REGINA M.", "day": "SATURDAY", "days": ["SAT"], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT2", "section": "N42", "faculty": "BONZO, DANIEL ISIDORE BRIAN", "day": "SATURDAY", "days": ["SAT"], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT2", "section": "N43", "faculty": "NACION, NELDA A.", "day": "SATURDAY", "days": ["SAT"], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT2", "section": "N26", "faculty": "ARCILLA, RECHEL G.", "day": "SATURDAY", "days": ["SAT"], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT2", "section": "N12", "faculty": "ALBERTO, ANGELO M.", "day": "SATURDAY", "days": ["SAT"], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "PRCSTAT", "section": "N71", "faculty": "CO, FRUMENCIO F.", "day": "SUNDAY", "days": ["SUN"], "time": "08:00-10:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "PRCSTAT", "section": "N80", "faculty": "OCAMPO, SHIRLEE S.", "day": "", "days": [], "time": "08:00-10:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "PRCSTAT", "section": "N92", "faculty": "LEONG, ROBERT NEIL F.", "day": "SUNDAY", "days": ["SUN"], "time": "08:00-10:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "PRCSTAT", "section": "N90", "faculty": "TRESVALLES, REGINA M.", "day": "SUNDAY", "days": ["SUN"], "time": "08:00-10:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "PRCSTAT", "section": "N52", "faculty": "BONZO, DANIEL ISIDORE BRIAN", "day": "SUNDAY", "days": ["SUN"], "time": "08:00-10:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "PRCSTAT", "section": "N82", "faculty": "NACION, NELDA A.", "day": "SUNDAY", "days": ["SUN"], "time": "08:00-10:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "PRCSTAT", "section": "N93", "faculty": "ARCILLA, RECHEL G.", "day": "SUNDAY", "days": ["SUN"], "time": "08:00-10:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "PRCSTAT", "section": "N97", "faculty": "ALBERTO, ANGELO M.", "day": "SUNDAY", "days": ["SUN"], "time": "08:00-10:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "BIOKMBI", "section": "N01A", "faculty": "Lazaro-Llanos, Nancy", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "BIOKMAN", "section": "N01A", "faculty": "Robles, Julita Climaco", "day": "TF", "days": ["TUE", "FRI"], "time": "16:15-17:15", "room": "J111", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "BIOKMAN", "section": "N02A", "faculty": "Robles, Julita Climaco", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-13:45", "room": "J111", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "BIOKMOR", "section": "N01", "faculty": "David Penaloza", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:00", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "BIOKMOR", "section": "N02", "faculty": "David Penaloza", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-15:30", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "BIOKMOR", "section": "N03", "faculty": "Lagua, Faith Marie G.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-15:30", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "BIOKMOR", "section": "N04", "faculty": "David Penaloza", "day": "TF", "days": ["TUE", "FRI"], "time": "16:15-17:15", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "KEMBIO2", "section": "N40", "faculty": "Lazaro-Llanos, Nancy", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "M306", "enrollCap": "30", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMORG1", "section": "N32", "faculty": "Lagua, Faith Marie G.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-09:00", "room": "Y305", "enrollCap": "", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMORG3", "section": "M01", "faculty": "Ebajo, Virgilio Jr. Dizon", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "J111", "enrollCap": "45", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMELE2", "section": "N30", "faculty": "Ng, Carlo Antonio T.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "L309", "enrollCap": "20", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMFEL2", "section": "N31", "faculty": "Ng, Carlo Antonio T.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "L309", "enrollCap": "20", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMBIC1", "section": "N02", "faculty": "Lazaro-Llanos, Nancy", "day": "MH", "days": ["MON", "THU"], "time": "07:30-09:00", "room": "J307", "enrollCap": "45", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMBEL1", "section": "N02", "faculty": "Lazaro-Llanos, Nancy", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "KEMINO1", "section": "N31", "faculty": "Garcia, Joel E.", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "Y305", "enrollCap": "", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMINO2", "section": "N30", "faculty": "Garcia, Joel E.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-09:00", "room": "Y308", "enrollCap": "30", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMINDS", "section": "N31", "faculty": "Punzalan, Eric R.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "A711", "enrollCap": "30", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMPHY1", "section": "N32", "faculty": "Macalino, Stephani Joy Yarcia", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "L309", "enrollCap": "30", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMPYS2", "section": "N01", "faculty": "Macalino, Stephani Joy Yarcia", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "J111", "enrollCap": "45", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMBGEN", "section": "N02", "faculty": "Sumayao, Rodolfo Jr. E.", "day": "MH", "days": ["MON", "THU"], "time": "16:15-17:45", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "KEMESS1", "section": "N40", "faculty": "Duay, Searle Aichelle Santos", "day": "FRIDAY", "days": ["FRI"], "time": "16:15-17:15", "room": "", "enrollCap": "40", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "KEMZEL2", "section": "N31", "faculty": "Ng, Carlo Antonio T.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "L309", "enrollCap": "30", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KMPHOR1", "section": "N01", "faculty": "Punzalan, Eric R.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "KEMANL1", "section": "M01", "faculty": "Robles, Julita Climaco", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "J111", "enrollCap": "45", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KMANALP", "section": "N01", "faculty": "Robles, Julita Climaco", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "J111", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "KMANALP", "section": "N02", "faculty": "Robles, Julita Climaco", "day": "MH", "days": ["MON", "THU"], "time": "16:15-17:45", "room": "J111", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "LBYKM21", "section": "M25A", "faculty": "Duay, Searle Aichelle Santos", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "J305", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYKM31", "section": "N25A", "faculty": "Lagua, Faith Marie G.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "J507", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYKM41", "section": "N26A", "faculty": "Duay, Searle Aichelle Santos", "day": "FRIDAY", "days": ["FRI"], "time": "07:30-10:30", "room": "J305", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYKM41", "section": "N26B", "faculty": "Duay, Searle Aichelle Santos", "day": "FRIDAY", "days": ["FRI"], "time": "11:00-14:00", "room": "J305", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYKM43", "section": "N25A", "faculty": "Sumayao, Rodolfo Jr. E.", "day": "THURSDAY", "days": ["THU"], "time": "11:00-14:00", "room": "J304", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYKM43", "section": "N25B", "faculty": "Sumayao, Rodolfo Jr. E.", "day": "FRIDAY", "days": ["FRI"], "time": "11:00-14:00", "room": "J304", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYKM51", "section": "N26A", "faculty": "Ng, Carlo Antonio T.", "day": "WEDNESDAY", "days": ["WED"], "time": "07:30-10:30", "room": "J312", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYKM51", "section": "N26B", "faculty": "Ng, Carlo Antonio T.", "day": "WEDNESDAY", "days": ["WED"], "time": "11:00-14:00", "room": "J312", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYKM52", "section": "N25A", "faculty": "Bantang, Jose Paolo O.", "day": "THURSDAY", "days": ["THU"], "time": "07:30-10:30", "room": "J506", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYANAP", "section": "N25A", "faculty": "Calingacion, Mariafe N.", "day": "THURSDAY", "days": ["THU"], "time": "07:30-10:30", "room": "J306", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYANAP", "section": "N25B", "faculty": "De La Rosa, Francis", "day": "FRIDAY", "days": ["FRI"], "time": "07:30-10:30", "room": "J306", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYANAP", "section": "N26A", "faculty": "Macalino, Stephani Joy Yarcia", "day": "FRIDAY", "days": ["FRI"], "time": "11:00-14:00", "room": "J306", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYANAP", "section": "N26B", "faculty": "De La Rosa, Francis", "day": "FRIDAY", "days": ["FRI"], "time": "14:30-17:30", "room": "J306", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBBBIBI", "section": "N26A", "faculty": "Sumayao, Rodolfo Jr. E.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "J305", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "LBYBIAN", "section": "N25A", "faculty": "Sagayap, Charmaine", "day": "TUESDAY", "days": ["TUE"], "time": "07:30-10:30", "room": "J306", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIAN", "section": "N25B", "faculty": "Macalino, Stephani Joy Yarcia", "day": "TUESDAY", "days": ["TUE"], "time": "11:00-14:00", "room": "J312", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIAN", "section": "N26A", "faculty": "Macalino, Stephani Joy Yarcia", "day": "THURSDAY", "days": ["THU"], "time": "14:30-17:30", "room": "J305", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIAN", "section": "N26B", "faculty": "Calingacion, Mariafe N.", "day": "THURSDAY", "days": ["THU"], "time": "14:30-17:30", "room": "J312", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIOR", "section": "N25A", "faculty": "Sumayao, Rodolfo Jr. E.", "day": "THURSDAY", "days": ["THU"], "time": "07:30-10:30", "room": "J507", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIOR", "section": "N25B", "faculty": "Miranda, Kevin Jace S.", "day": "WEDNESDAY", "days": ["WED"], "time": "11:00-14:00", "room": "J507", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIOR", "section": "N26A", "faculty": "De La Rosa, Francis", "day": "THURSDAY", "days": ["THU"], "time": "14:30-17:30", "room": "J506", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIOR", "section": "N26B", "faculty": "Cybele Santos", "day": "FRIDAY", "days": ["FRI"], "time": "07:30-10:30", "room": "J507", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIOR", "section": "N27A", "faculty": "Go, Johnalyn Cabarles", "day": "TUESDAY", "days": ["TUE"], "time": "11:00-14:00", "room": "J507", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIOR", "section": "N27B", "faculty": "Cybele Santos", "day": "FRIDAY", "days": ["FRI"], "time": "14:30-17:30", "room": "J507", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIOR", "section": "N28A", "faculty": "Cybele Santos", "day": "WEDNESDAY", "days": ["WED"], "time": "07:30-10:30", "room": "J507", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "", "faculty": "", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "KOFISCI", "section": "N25A", "faculty": "Garcia, Emmanuel Vicencio", "day": "TUESDAY", "days": ["TUE"], "time": "11:00-14:00", "room": "C304", "enrollCap": "20", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KOFISCI", "section": "", "faculty": "Garcia, Emmanuel Vicencio", "day": "WEDNESDAY", "days": ["WED"], "time": "11:00-14:00", "room": "C304", "enrollCap": "20", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N52", "faculty": "Cayme, Jan-Michael C.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N34", "faculty": "Lagua, Faith Marie G.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N58", "faculty": "Duay, Searle Aichelle Santos", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N55", "faculty": "Calingacion, Mariafe N.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N43", "faculty": "Alba, Laurenzo D. V.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N37", "faculty": "Malabed, Raymond S.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N41", "faculty": "Espiritu, Rafael Atilo", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N05", "faculty": "Punzalan, Eric R.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N27", "faculty": "Garcia, Emmanuel V.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYC", "section": "N53", "faculty": "Garcia, Joel E.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYC", "section": "N57", "faculty": "Bonto, Aldrin P.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYC", "section": "N43", "faculty": "Alba, Laurenzo D. V.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSFSCC", "section": "N57", "faculty": "Bonto, Aldrin P.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N34", "faculty": "Lagua, Faith Marie G.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N55", "faculty": "Calingacion, Mariafe N.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N27", "faculty": "Garcia, Emmanuel V", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N39", "faculty": "Ng, Carlo Antonio T.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N61", "faculty": "Bantang, Jose Paolo O.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N39", "faculty": "Ng, Carlo Antonio T.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N37", "faculty": "Malabed, Raymond S.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N47", "faculty": "Sumayao, Rodolfo Jr. E", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N41", "faculty": "Espiritu, Rafael A", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N46", "faculty": "Penaloza, David Jr. P", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N58", "faculty": "Duay, Searle Aichelle Santos", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N18", "faculty": "Guidote, Lourdes Pangan", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N52", "faculty": "Cayme, Jan-Michael C.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMB", "section": "N27", "faculty": "Garcia, Emmanuel V.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMB", "section": "N56", "faculty": "Macalino, Stephani Joy Y.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMC", "section": "N65", "faculty": "Tan, Glenn Kelly U.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMC", "section": "N37", "faculty": "Malabed, Raymond S.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "PRCBCHM", "section": "N88", "faculty": "Espiritu, Rafael A.", "day": "", "days": [], "time": "18:00-19:30", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "PRCBCHM", "section": "N56", "faculty": "Macalino, Stephani Joy Y.", "day": "", "days": [], "time": "18:00-19:30", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "PRCBCHM", "section": "N95", "faculty": "Malabed, Raymond S.", "day": "", "days": [], "time": "20:15-22:15", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "PRCBCHM", "section": "N93", "faculty": "De La Rosa, Francis", "day": "", "days": [], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "PRCCHEM", "section": "N90", "faculty": "Alba, Laurenzo D. V.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "PRCCHEM", "section": "N59", "faculty": "Bonto, Aldrin P.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "PRCFSCI", "section": "N59", "faculty": "Bonto, Aldrin P.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "KEMORG2", "section": "N40", "faculty": "Glenn Tan", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "M315", "enrollCap": "", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYKM32", "section": "N25A", "faculty": "Glenn Tan", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "J507", "enrollCap": "", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "KEMESS3", "section": "N30", "faculty": "Calingacion, Mariafe N.", "day": "THURSDAY", "days": ["THU"], "time": "16:15-17:15", "room": "Y305", "enrollCap": "", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "KEMPRN2", "section": "N01", "faculty": "Espiritu, Rafael Atilo", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "J109", "enrollCap": "", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYKM12", "section": "N01", "faculty": "Ng, Vincent Antonio", "day": "WEDNESDAY", "days": ["WED"], "time": "11:00-14:00", "room": "J306", "enrollCap": "", "mode": "F2F", "restricted": false}, {"department": "BIOLOGY", "code": "ANIPREC", "section": "N40A", "faculty": "Arellano, Bridget C.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "M314", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "BIMEDIC", "section": "N01", "faculty": "Cruz, Jowi Tsidkenu P.", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "A1103", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "BIMEDIC", "section": "N02", "faculty": "Cruz, Jowi Tsidkenu P.", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "A1103", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "BIMEDIC", "section": "N03", "faculty": "Cruz, Jowi Tsidkenu P.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "Y407", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "BIMEDIC", "section": "N04", "faculty": "Cruz, Jowi Tsidkenu P.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "Y408", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "BIMEDIC", "section": "N05", "faculty": "Cruz, Jowi Tsidkenu P.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "Y409", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N01", "faculty": "Cabrera, Esperanza C.", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "Y407", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N02", "faculty": "Delos Reyes, Mariquit M.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "Y407", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N03", "faculty": "Delos Reyes, Mariquit M.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "Y408", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N04", "faculty": "Delos Reyes, Mariquit M.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "Y409", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N05", "faculty": "Salvador, Paul Benedic U.", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "V207", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N06", "faculty": "Salvador, Paul Benedic U.", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "V207", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N07", "faculty": "Cabrera, Esperanza C.", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "Y408", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N08", "faculty": "Cabrera, Esperanza C.", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "Y409", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N09", "faculty": "Salvador, Paul Benedic U.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "Y507", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N10", "faculty": "Salvador, Paul Benedic U.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "Y508", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N11", "faculty": "Salvador, Paul Benedic U.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "Y509", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N12", "faculty": "Delos Reyes, Mariquit M.", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "EPIDEMI", "section": "N40", "faculty": "Simando III, Amador F.", "day": "MH", "days": ["MON", "THU"], "time": "16:15-17:45", "room": "A1103", "enrollCap": "40", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "EPIDEMI", "section": "N41", "faculty": "Simando III, Amador F.", "day": "MH", "days": ["MON", "THU"], "time": "16:15-17:45", "room": "A1103", "enrollCap": "40", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "HBIOANA", "section": "N01A", "faculty": "Ples, Michael B.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "A1103", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "HBIOANA", "section": "N02A", "faculty": "Ples, Michael B.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "A1103", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N01", "faculty": "Bagon, Bernadette B.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "V207", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N02", "faculty": "Bagon, Bernadette B.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "V207", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N03", "faculty": "Eguia, Maria Rowena R.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "V207", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N04", "faculty": "Eguia, Maria Rowena R.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "V207", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N05", "faculty": "Ramos, Gliceria B.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-12:30", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N06", "faculty": "Enriquez, Ma. Luisa D.", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "Y407", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N07", "faculty": "Enriquez, Ma. Luisa D.", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "Y408", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N08", "faculty": "Ramos, Gliceria B.", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N09", "faculty": "Ramos, Gliceria B.", "day": "TF", "days": ["TUE", "FRI"], "time": "16:15-17:45", "room": "Y407", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N10", "faculty": "Ramos, Gliceria B.", "day": "TF", "days": ["TUE", "FRI"], "time": "16:15-17:45", "room": "Y408", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N11", "faculty": "Bagon, Bernadette B.", "day": "TF", "days": ["TUE", "FRI"], "time": "16:15-17:45", "room": "V207", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N12", "faculty": "Bagon, Bernadette B.", "day": "TF", "days": ["TUE", "FRI"], "time": "16:15-17:45", "room": "V207", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INDUBIO", "section": "N01", "faculty": "Eguia, Maria Rowena R.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "A1103", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INDUBIO", "section": "N02", "faculty": "Eguia, Maria Rowena R.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "A1103", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "PATHOLO", "section": "N01", "faculty": "Espiritu, Gerard Anthony M.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "J107", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "ECOLGEN", "section": "N01", "faculty": "Dolojan, Dennis A.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-09:00", "room": "L111", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "GPHYSIO", "section": "N46", "faculty": "Gan, Rosita R.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "L331", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "DEVBIOL", "section": "N01", "faculty": "Ramos, Gliceria B.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-09:00", "room": "J107", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "IMMUNOL", "section": "N01A", "faculty": "Limson, Brian M.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-12:30", "room": "L111", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "IMMUNOL", "section": "N02A", "faculty": "Limson, Brian M.", "day": "MH", "days": ["MON", "THU"], "time": "18:00-19:30", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "IMMUNOL", "section": "N03A", "faculty": "Limson, Brian M.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-09:00", "room": "J111", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "GPROMIC", "section": "N02", "faculty": "Lagman, Ma. Carmen A.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "C412", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "GPROMIC", "section": "N03", "faculty": "Lagman, Ma. Carmen A.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "C412", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LIFEDAT", "section": "N31", "faculty": "Pacheco, Paolo Ramon D.C", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "L309", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "MDENTOM", "section": "N01", "faculty": "Amarga, Ace Kevin S.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "Y507", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "MDENTOM", "section": "N02", "faculty": "Amarga, Ace Kevin S.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "Y508", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "MICROBE", "section": "N01", "faculty": "Uba, Marigold O.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "J307", "enrollCap": "", "mode": "", "restricted": false}, {"department": "BIOLOGY", "code": "PHYSIOP", "section": "N01", "faculty": "Ples, Michael B.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "J111", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "SYSTEMA", "section": "N01", "faculty": "Mandia, Emelina H.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "L315", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "SYSTEMA", "section": "N02", "faculty": "Licuanan, Wilfredo Roehl Y.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-09:00", "room": "A1103", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "SYSTEMA", "section": "N03", "faculty": "Mandia, Emelina H.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "L315", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "SYSTEMA", "section": "N04", "faculty": "Licuanan, Wilfredo Roehl Y.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-09:00", "room": "A1103", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "TERECOL", "section": "N01", "faculty": "Jose Santos Carandang VI", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "C412", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "THBIOL1", "section": "N31", "faculty": "Ples, Michael B.", "day": "WEDNESDAY", "days": ["WED"], "time": "07:30-09:30", "room": "M313", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "THSHBIO", "section": "N01", "faculty": "De Guia, Jessica Joyce R.", "day": "WEDNESDAY", "days": ["WED"], "time": "11:00-13:00", "room": "A1103", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "THSHBIO", "section": "N02", "faculty": "De Guia, Jessica Joyce R.", "day": "WEDNESDAY", "days": ["WED"], "time": "11:00-13:00", "room": "A1103", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "THSHBIO", "section": "N03", "faculty": "De Guia, Jessica Joyce R.", "day": "WEDNESDAY", "days": ["WED"], "time": "11:00-13:00", "room": "A1103", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "THSHBIO", "section": "N04", "faculty": "", "day": "THURSDAY", "days": ["THU"], "time": "14:30-16:30", "room": "A1403", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "THSHBIO", "section": "N05", "faculty": "", "day": "THURSDAY", "days": ["THU"], "time": "14:30-16:30", "room": "A1403", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "VTENPRO", "section": "N40", "faculty": "Arellano, Bridget C.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-12:30", "room": "M305", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "VERTANA", "section": "N40A", "faculty": "Ples, Michael B.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "J303", "enrollCap": "40", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI12", "section": "N26A", "faculty": "Dolojan, Dennis A.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C406", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI12", "section": "N26B", "faculty": "Dela Paz, Erica Silk P.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C409", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI12", "section": "N27A", "faculty": "Dolojan, Dennis A.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C406", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI12", "section": "N27B", "faculty": "Robles, Laurence E.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C409", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI12", "section": "N28A", "faculty": "Dolojan, Dennis A.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C409", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI12", "section": "N28B", "faculty": "Dela Paz, Erica Silk P.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C406", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI12", "section": "N29A", "faculty": "Amarga, Ace Kevin S.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C406", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N25A", "faculty": "Querubin, Florabelle D.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N25B", "faculty": "Sanchez, Joanna S.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N25C", "faculty": "Rosana, Albert Remus R.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N25D", "faculty": "Querubin, Florabelle D.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N25E", "faculty": "Santos, Jiaan Carlo E.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N25F", "faculty": "Yap, Jennifer Maries G.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N26A", "faculty": "Rosana, Albert Remus R.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N26B", "faculty": "Yap, Jennifer Maries G.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N26C", "faculty": "Uba, Marigold O.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N26D", "faculty": "Yap, Jennifer Maries G.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-10:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N26E", "faculty": "Rosana, Albert Remus R.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-14:00", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N26F", "faculty": "Santos, Jiaan Carlo E.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-14:00", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N27A", "faculty": "Torrejos, Yokimiko D.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N27B", "faculty": "Querubin, Florabelle D.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N27C", "faculty": "Santos, Jiaan Carlo E.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N27D", "faculty": "Yap, Jennifer Maries G.", "day": "WS", "days": ["WED", "SAT"], "time": "11:00-14:00", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N27E", "faculty": "Uba, Marigold O.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N27F", "faculty": "Mondragon, John Martin S.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N28A", "faculty": "Mondragon, John Martin S.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-10:30", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N28B", "faculty": "Mondragon, John Martin S.", "day": "WS", "days": ["WED", "SAT"], "time": "11:00-14:00", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N28C", "faculty": "Mondragon, John Martin S.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N28D", "faculty": "Querubin, Florabelle D.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N28E", "faculty": "Mondragon, John Martin S.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N28F", "faculty": "Uba, Marigold O.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N25A", "faculty": "Orario, Hilarie P.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N25B", "faculty": "Mamauag, Antonio Samuel S.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N25C", "faculty": "Orario, Hilarie P.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N25D", "faculty": "Mamauag, Antonio Samuel S.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N25E", "faculty": "Benedicto, Jody M.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-10:30", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N25F", "faculty": "Santiago, Jane Abigail M.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-10:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N26A", "faculty": "Mamauag, Antonio Samuel S.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N26B", "faculty": "Swann, Priscilla Hope P.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N26C", "faculty": "Benedicto, Jody M.", "day": "WS", "days": ["WED", "SAT"], "time": "11:00-14:00", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N26D", "faculty": "Galvez, Julian Chris F.", "day": "WS", "days": ["WED", "SAT"], "time": "11:00-14:00", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N26E", "faculty": "Abeledo, Chona Camille V.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N26F", "faculty": "Lawsin, Nikko Lorenz P.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N27A", "faculty": "Orario, Hilarie P.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N27B", "faculty": "Galvez, Julian Chris F.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N27C", "faculty": "Benedicto, Jody M.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-14:00", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N27D", "faculty": "Lawsin, Nikko Lorenz P.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-14:00", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N27E", "faculty": "Benedicto, Jody M.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N27F", "faculty": "Santiago, Jane Abigail M.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N28A", "faculty": "Benedicto, Jody M.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N28B", "faculty": "Galvez, Julian Chris F.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N28C", "faculty": "Benedicto, Jody M.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N28D", "faculty": "Lawsin, Nikko Lorenz P.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI26", "section": "N25A", "faculty": "Mandia, Emelina H.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI21", "section": "X23", "faculty": "", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-14:00", "room": "LB409", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI21", "section": "X23A", "faculty": "", "day": "WS", "days": ["WED", "SAT"], "time": "11:00-14:00", "room": "LB412", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI21", "section": "X23B", "faculty": "", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-14:00", "room": "LB409", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI21", "section": "XXB4", "faculty": "", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "LB412", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBOBI22", "section": "N25A", "faculty": "Mercado, Van Jerwin P.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "ONLINE", "enrollCap": "", "mode": "FOL", "restricted": false}, {"department": "BIOLOGY", "code": "LBOBI22", "section": "N25B", "faculty": "Mercado, Van Jerwin P.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "ONLINE", "enrollCap": "", "mode": "FOL", "restricted": false}, {"department": "BIOLOGY", "code": "LBOBI22", "section": "N26A", "faculty": "Mercado, Van Jerwin P.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-10:30", "room": "ONLINE", "enrollCap": "", "mode": "FOL", "restricted": false}, {"department": "BIOLOGY", "code": "LBOBI22", "section": "N26B", "faculty": "Contreras, Anthony Joseph M.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "ONLINE", "enrollCap": "", "mode": "FOL", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI27", "section": "N25A", "faculty": "Pacheco, Paolo Ramon D.C", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "ONLINE", "enrollCap": "", "mode": "", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI31", "section": "N25A", "faculty": "Marquez, Jubert C.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "ONLINE", "enrollCap": "", "mode": "POL", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI31", "section": "N25B", "faculty": "Marquez, Jubert C.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "ONLINE", "enrollCap": "", "mode": "POL", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI31", "section": "N26A", "faculty": "Marquez, Jubert C.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-10:30", "room": "ONLINE", "enrollCap": "", "mode": "POL", "restricted": false}, {"department": "BIOLOGY", "code": "LBOBI32", "section": "N25A", "faculty": "Santiago, Jane Abigail M.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "ONLINE", "enrollCap": "", "mode": "FOL", "restricted": false}, {"department": "BIOLOGY", "code": "LBOBI32", "section": "N25B", "faculty": "Lagman, Ma. Carmen A.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-14:00", "room": "ONLINE", "enrollCap": "", "mode": "FOL", "restricted": false}, {"department": "BIOLOGY", "code": "LBOBI32", "section": "N26A", "faculty": "Lagman, Ma. Carmen A.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-10:30", "room": "ONLINE", "enrollCap": "", "mode": "FOL", "restricted": false}, {"department": "BIOLOGY", "code": "LBYBI36", "section": "N25A", "faculty": "Ramos, Gliceria B.", "day": "TUESDAY", "days": ["TUE"], "time": "14:30-17:30", "room": "J204", "enrollCap": "", "mode": "", "restricted": false}, {"department": "BIOLOGY", "code": "LBYBI38", "section": "N26A", "faculty": "Uba, Marigold O.", "day": "THURSDAY", "days": ["THU"], "time": "07:30-10:30", "room": "J605", "enrollCap": "", "mode": "", "restricted": false}, {"department": "BIOLOGY", "code": "LBYBI38", "section": "N26B", "faculty": "Cantiller, Patricio Elvin L.", "day": "THURSDAY", "days": ["THU"], "time": "07:30-10:30", "room": "J607", "enrollCap": "", "mode": "", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI39", "section": "N25A", "faculty": "De Guia, Jessica Joyce R.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI39", "section": "N25B", "faculty": "Arellano, Bridget C.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI23", "section": "N26A", "faculty": "Simando III, Amador F.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "SJ204", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI14", "section": "N25A", "faculty": "Robles, Laurence E.", "day": "WS", "days": ["WED", "SAT"], "time": "11:00-14:00", "room": "C407", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBYBI19", "section": "N25A", "faculty": "Ramos, Gliceria B.", "day": "WS", "days": ["WED", "SAT"], "time": "11:00-14:00", "room": "C404", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBYBI47", "section": "N25A", "faculty": "Arellano, Bridget C.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "J202", "enrollCap": "24", "mode": "HYBRID", "restricted": false}];

const state = {
  courses: EMBEDDED_COURSES,
  filtered: [],
  schedule: loadSchedule(),
  presets: loadPresets(),
  favorites: loadFavorites(),
  expandedCompare: new Set(),
  studentId: loadStudentId(),
  scheduleTitle: localStorage.getItem("cosfinder-schedule-title") || "",
  theme: localStorage.getItem("cosfinder-theme") || "light",
  undo: null,
};

const soundState = {
  enabled: false,
  ctx: null,
};

const CALENDAR_DAYS = ["MON","TUE","WED","THU","FRI","SAT","SUN"];
const DAY_LABEL_MAP = {
  MON:"MON", TUE:"TUE", WED:"WED", THU:"THU", FRI:"FRI", SAT:"SAT", SUN:"SUN",
  MONDAY:"MON", TUESDAY:"TUE", WEDNESDAY:"WED", THURSDAY:"THU", FRIDAY:"FRI", SATURDAY:"SAT", SUNDAY:"SUN",
  M:"MON", T:"TUE", W:"WED", H:"THU", F:"FRI", S:"SAT", U:"SUN"
};
const START_HOUR = 7;
const END_HOUR = 22;
const HOUR_HEIGHT = 60;

const els = {
  searchInput: document.getElementById("searchInput"),
  departmentFilter: document.getElementById("departmentFilter"),
  dayFilter: document.getElementById("dayFilter"),
  timeFilter: document.getElementById("timeFilter"),
  modeFilter: document.getElementById("modeFilter"),
  restrictedOnlyFilter: document.getElementById("restrictedOnlyFilter"),
  noConflictFilter: document.getElementById("noConflictFilter"),
  favoritesOnlyFilter: document.getElementById("favoritesOnlyFilter"),
  results: document.getElementById("results"),
  resultMeta: document.getElementById("resultMeta"),
  favoriteMeta: document.getElementById("favoriteMeta"),
  clearFavoritesBtn: document.getElementById("clearFavoritesBtn"),
  calendarGrid: document.getElementById("calendarGrid"),
  timeAxis: document.getElementById("timeAxis"),
  mobileSchedule: document.getElementById("mobileSchedule"),
  statusBar: document.getElementById("statusBar"),
  scheduleSummary: document.getElementById("scheduleSummary"),
  conflictFixer: document.getElementById("conflictFixer"),
  clearScheduleBtn: document.getElementById("clearScheduleBtn"),
  cardTemplate: document.getElementById("resultCardTemplate"),
  toast: document.getElementById("toast"),
  themeToggleBtn: document.getElementById("themeToggleBtn"),
  loginOverlay: document.getElementById("loginOverlay"),
  loginForm: document.getElementById("loginForm"),
  studentIdInput: document.getElementById("studentIdInput"),
  rememberIdInput: document.getElementById("rememberIdInput"),
  loginError: document.getElementById("loginError"),
  activeStudentId: document.getElementById("activeStudentId"),
  changeIdBtn: document.getElementById("changeIdBtn"),
  scheduleTitleInput: document.getElementById("scheduleTitleInput"),
  exportLayoutSelect: document.getElementById("exportLayoutSelect"),
  paperSizeSelect: document.getElementById("paperSizeSelect"),
  orientationSelect: document.getElementById("orientationSelect"),
  presetSelect: document.getElementById("presetSelect"),
  savePresetBtn: document.getElementById("savePresetBtn"),
  loadPresetBtn: document.getElementById("loadPresetBtn"),
  deletePresetBtn: document.getElementById("deletePresetBtn"),
  previewExportBtn: document.getElementById("previewExportBtn"),
  exportPreviewModal: document.getElementById("exportPreviewModal"),
  exportPreviewBody: document.getElementById("exportPreviewBody"),
  closePreviewBtn: document.getElementById("closePreviewBtn"),
  exportButtons: [...document.querySelectorAll("[data-export]")],
  previewExportButtons: [...document.querySelectorAll("[data-preview-export]")],
  dataSourceBadge: document.getElementById("dataSourceBadge"),
  lastUpdatedBadge: document.getElementById("lastUpdatedBadge"),
  helpSearchInput: document.getElementById("helpSearchInput"),
  helpSearchMeta: document.getElementById("helpSearchMeta"),
  helpJumpButtons: [...document.querySelectorAll("[data-help-jump]")],
};

function scoreMatch(record, query) {
  if (!query) return 0;
  const haystacks = [
    record.code, record.section, record.faculty, record.room, record.mode, record.department,
  ].filter(Boolean).map(v => String(v).toLowerCase());

  const q = query.toLowerCase();
  let score = 0;
  for (const h of haystacks) {
    if (h === q) score = Math.max(score, 120);
    else if (h.startsWith(q)) score = Math.max(score, 90);
    else if (h.includes(q)) score = Math.max(score, 70);
    else {
      const compactH = h.replace(/[^a-z0-9]/g, "");
      const compactQ = q.replace(/[^a-z0-9]/g, "");
      if (compactQ && compactH.includes(compactQ)) score = Math.max(score, 60);
    }
  }
  return score;
}

function courseMatchesExtraFilters(course) {
  const day = els.dayFilter?.value || "";
  const time = els.timeFilter?.value || "";
  const mode = els.modeFilter?.value || "";
  if (day && !normalizeCourseDays(course).includes(day)) return false;
  if (time && !matchesTimeBucket(course, time)) return false;
  if (mode && !matchesMode(course, mode)) return false;
  if (els.restrictedOnlyFilter?.checked && !course.restricted) return false;
  if (els.noConflictFilter?.checked && conflictsWithSchedule(course)) return false;
  if (els.favoritesOnlyFilter?.checked && !state.favorites.has(uniqueId(course))) return false;
  return true;
}

function matchesTimeBucket(course, bucket) {
  const range = parseTimeRange(course.time);
  if (!range) return false;
  if (bucket === "morning") return range.start < 12;
  if (bucket === "afternoon") return range.start >= 12 && range.start < 18;
  if (bucket === "evening") return range.start >= 18;
  return true;
}

function matchesMode(course, mode) {
  const text = `${course.mode || ""} ${course.room || ""}`.toUpperCase();
  if (mode === "ONLINE") return text.includes("ONLINE") || text.includes("FOL") || text.includes("POL");
  return text.includes(mode);
}

function conflictsWithSchedule(course) {
  const candidateDays = normalizeCourseDays(course);
  const candidateRange = parseTimeRange(course.time);
  if (!candidateDays.length || !candidateRange) return false;
  return state.schedule.some((item) => {
    if (uniqueId(item) === uniqueId(course)) return false;
    const itemRange = parseTimeRange(item.time);
    if (!itemRange) return false;
    return normalizeCourseDays(item).some((day) =>
      candidateDays.includes(day) &&
      candidateRange.start < itemRange.end &&
      candidateRange.end > itemRange.start
    );
  });
}

function activeFilterCount() {
  return [
    els.dayFilter?.value,
    els.timeFilter?.value,
    els.modeFilter?.value,
    els.restrictedOnlyFilter?.checked,
    els.noConflictFilter?.checked,
    els.favoritesOnlyFilter?.checked,
  ].filter(Boolean).length;
}

function displayTime(time24) {
  if (!time24 || !time24.includes("-")) return time24 || "-";
  const [start, end] = time24.split("-");
  return `${to12h(start)}-${to12h(end)}`;
}

function to12h(hhmm) {
  const [hh, mm] = hhmm.split(":").map(Number);
  const suffix = hh >= 12 ? "PM" : "AM";
  const hour = hh % 12 || 12;
  return `${String(hour).padStart(2, "0")}:${String(mm).padStart(2, "0")} ${suffix}`;
}

function parseTimeRange(time24) {
  if (!time24 || !time24.includes("-")) return null;
  const [start, end] = time24.split("-");
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  return { start: sh + sm / 60, end: eh + em / 60 };
}

function uniqueId(course) {
  return `${course.department}__${course.code}__${course.section}__${course.day}__${course.time}__${course.room}`;
}

function saveSchedule() {
  localStorage.setItem("tiiny-course-schedule", JSON.stringify(state.schedule));
}

function loadSchedule() {
  try {
    const value = JSON.parse(localStorage.getItem("tiiny-course-schedule") || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function loadPresets() {
  try {
    const value = JSON.parse(localStorage.getItem("cosfinder-schedule-presets") || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function savePresets() {
  localStorage.setItem("cosfinder-schedule-presets", JSON.stringify(state.presets));
}

function loadFavorites() {
  try {
    const value = JSON.parse(localStorage.getItem("cosfinder-favorite-courses") || "[]");
    return new Set(Array.isArray(value) ? value : []);
  } catch {
    return new Set();
  }
}

function saveFavorites() {
  localStorage.setItem("cosfinder-favorite-courses", JSON.stringify([...state.favorites]));
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

function loadStudentId() {
  const saved = localStorage.getItem("cosfinder-student-id") || sessionStorage.getItem("cosfinder-student-id") || "";
  return /^12\d{6}$/.test(saved) ? saved : "";
}

function saveStudentId(id, remember) {
  state.studentId = id;
  sessionStorage.setItem("cosfinder-student-id", id);
  if (remember) localStorage.setItem("cosfinder-student-id", id);
  else localStorage.removeItem("cosfinder-student-id");
  renderStudentId();
}

function renderStudentId() {
  if (els.activeStudentId) els.activeStudentId.textContent = state.studentId ? `ID ${state.studentId}` : "Not signed in";
}

function requireLogin() {
  const isSignedIn = /^12\d{6}$/.test(state.studentId);
  document.body.classList.toggle("locked", !isSignedIn);
  if (!els.loginOverlay) return;
  els.loginOverlay.classList.toggle("hidden", isSignedIn);
  if (!isSignedIn) {
    els.studentIdInput.value = "";
    setTimeout(() => els.studentIdInput?.focus(), 50);
  }
}

function applyTheme() {
  const isDark = state.theme === "dark";
  document.body.classList.toggle("theme-dark", isDark);
  if (els.themeToggleBtn) {
    els.themeToggleBtn.setAttribute("aria-pressed", String(isDark));
    els.themeToggleBtn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    els.themeToggleBtn.title = isDark ? "Switch to light theme" : "Switch to dark theme";
    els.themeToggleBtn.innerHTML = `<svg><use href="#icon-${isDark ? "sun" : "moon"}"></use></svg>`;
  }
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("cosfinder-theme", state.theme);
  applyTheme();
}

function renderFilters() {
  const depts = [...new Set(state.courses.map(c => c.department))].sort();
  for (const dept of depts) {
    const opt = document.createElement("option");
    opt.value = dept;
    opt.textContent = dept;
    els.departmentFilter.appendChild(opt);
  }
}

function applyFilters() {
  const query = els.searchInput.value.trim();
  const dept = els.departmentFilter.value;
  state.filtered = state.courses
    .map(course => ({ course, score: scoreMatch(course, query) }))
    .filter(({ course, score }) => (!dept || course.department === dept) && (!query || score > 0) && courseMatchesExtraFilters(course))
    .sort((a, b) => b.score - a.score || a.course.code.localeCompare(b.course.code) || a.course.section.localeCompare(b.course.section))
    .map(({ course }) => course);
  renderResults(query, dept);
}

function renderResults(query, dept) {
  els.results.innerHTML = "";
  renderFavoriteMeta();
  let meta = `${state.filtered.length} result${state.filtered.length === 1 ? "" : "s"}`;
  if (dept) meta += ` in ${dept}`;
  if (activeFilterCount()) meta += ` with ${activeFilterCount()} active filter${activeFilterCount() === 1 ? "" : "s"}`;
  if (!query && !dept && !activeFilterCount()) meta = `Showing all available course offerings`;
  els.resultMeta.textContent = meta;

  if (!state.filtered.length) {
    els.results.innerHTML = `<div class="empty-state">No matching courses found.</div>`;
    return;
  }

  const fragment = document.createDocumentFragment();
  const codeCounts = state.filtered.reduce((map, course) => {
    map.set(course.code, (map.get(course.code) || 0) + 1);
    return map;
  }, new Map());
  let lastCode = "";
  for (const course of state.filtered) {
    if (course.code !== lastCode && codeCounts.get(course.code) > 1) {
      const sections = state.filtered.filter(item => item.code === course.code);
      const group = document.createElement("div");
      group.className = "compare-group";
      group.innerHTML = `
        <div><strong>${course.code}</strong><span>${codeCounts.get(course.code)} sections to compare</span></div>
        <button class="compare-toggle" type="button">${state.expandedCompare.has(course.code) ? "Hide comparison" : "Compare sections"}</button>
      `;
      group.querySelector(".compare-toggle").addEventListener("click", () => {
        if (state.expandedCompare.has(course.code)) state.expandedCompare.delete(course.code);
        else state.expandedCompare.add(course.code);
        renderResults(query, dept);
      });
      fragment.appendChild(group);
      if (state.expandedCompare.has(course.code)) fragment.appendChild(createComparisonTable(course.code, sections));
      lastCode = course.code;
    } else if (course.code !== lastCode) {
      lastCode = course.code;
    }
    const node = els.cardTemplate.content.firstElementChild.cloneNode(true);
    node.dataset.department = course.department || "";
    node.style.setProperty("--dept-color", departmentColor(course.department));
    node.querySelector(".course-code").textContent = course.code;
    node.querySelector(".faculty").textContent = course.faculty || "-";
    node.querySelector(".department").textContent = course.department || "-";
    node.querySelector(".section").textContent = course.section || "-";
    node.querySelector(".day").textContent = course.day || "-";
    node.querySelector(".time").textContent = displayTime(course.time);
    node.querySelector(".room").textContent = course.room || "-";
    node.querySelector(".cap").textContent = course.enrollCap || "-";
    node.querySelector(".mode").textContent = course.mode || "-";
    node.querySelector(".remarks").textContent = course.restricted ? "RESTRICTED" : "-";
    if (course.restricted) {
      node.classList.add("restricted-card");
      node.querySelector(".restricted-badge").classList.remove("hidden");
      node.querySelector(".remarks").classList.add("restricted-text");
    }
    const addButton = node.querySelector(".add-btn");
    addButton.addEventListener("click", () => addCourseToSchedule(course, addButton));
    const favoriteButton = node.querySelector(".favorite-btn");
    if (state.favorites.has(uniqueId(course))) {
      node.classList.add("favorite-card");
      favoriteButton.classList.add("active");
      favoriteButton.innerHTML = `<svg><use href="#icon-star"></use></svg>Pinned`;
    }
    favoriteButton.addEventListener("click", () => toggleFavorite(course));
    fragment.appendChild(node);
  }
  els.results.appendChild(fragment);
}

function addCourseToSchedule(course, anchor) {
  const id = uniqueId(course);
  if (!state.schedule.some(item => uniqueId(item) === id)) {
    state.schedule.push(course);
    saveSchedule();
    renderSchedule();
    if (anchor) burst(anchor);
    showToast(`${course.code} ${course.section || ""} added to your calendar.`);
  } else {
    showToast(`${course.code} ${course.section || ""} is already in your calendar.`);
  }
}

function toggleFavorite(course) {
  const id = uniqueId(course);
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast(`${course.code} ${course.section || ""} unpinned.`);
  } else {
    state.favorites.add(id);
    showToast(`${course.code} ${course.section || ""} pinned.`);
  }
  saveFavorites();
  applyFilters();
}

function renderFavoriteMeta() {
  if (els.favoriteMeta) {
    els.favoriteMeta.textContent = `${state.favorites.size} pinned course${state.favorites.size === 1 ? "" : "s"}`;
  }
}

function createComparisonTable(code, sections) {
  const wrapper = document.createElement("div");
  wrapper.className = "comparison-table";
  const rows = sections.map((course) => `
    <tr>
      <td><strong>${escapeHtml(course.section || "-")}</strong></td>
      <td>${escapeHtml(course.day || "-")}</td>
      <td>${escapeHtml(displayTime(course.time))}</td>
      <td>${escapeHtml(course.room || "No room listed")}</td>
      <td>${escapeHtml(course.faculty || "-")}</td>
      <td>${escapeHtml(course.mode || "-")}</td>
      <td>${conflictsWithSchedule(course) ? '<span class="mini-alert">Conflict</span>' : '<span class="mini-ok">Fits</span>'}</td>
      <td><button class="mini-add-btn" type="button" data-course-id="${escapeHtml(uniqueId(course))}">Add</button></td>
    </tr>
  `).join("");
  wrapper.innerHTML = `
    <div class="comparison-title">${escapeHtml(code)} side-by-side sections</div>
    <div class="comparison-scroll">
      <table>
        <thead><tr><th>Section</th><th>Day</th><th>Time</th><th>Room</th><th>Faculty</th><th>Mode</th><th>Status</th><th></th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
  wrapper.querySelectorAll(".mini-add-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const course = sections.find(item => uniqueId(item) === button.dataset.courseId);
      if (course) addCourseToSchedule(course, button);
    });
  });
  return wrapper;
}


function normalizeCourseDays(course){
  if (Array.isArray(course.days) && course.days.length) {
    return course.days.map(d => DAY_LABEL_MAP[String(d).toUpperCase()] || String(d).toUpperCase()).filter(Boolean);
  }
  const raw = String(course.day || "").toUpperCase().trim();
  if (!raw) return [];
  if (raw.includes(",")) {
    return raw.split(",").flatMap(part => normalizeCourseDays({ day: part.trim() }));
  }
  if (DAY_LABEL_MAP[raw]) return [DAY_LABEL_MAP[raw]];
  if (/^[MTHFWSU]+$/.test(raw) && raw.length > 1) {
    return raw.split("").map(ch => DAY_LABEL_MAP[ch]).filter(Boolean);
  }
  return [raw];
}

function formatDayLabel(day){
  return {MON:"Mon",TUE:"Tue",WED:"Wed",THU:"Thu",FRI:"Fri",SAT:"Sat",SUN:"Sun"}[day] || day;
}

function departmentColor(department = "") {
  const palette = {
    "PHYSICS": "#7440a8",
    "MATH & STATS": "#2f6f9f",
    "CHEMISTRY": "#b7791f",
    "BIOLOGY": "#1f8a63",
  };
  return palette[department] || "#5b2a86";
}

function renderMobileSchedule(events, overlapSet) {
  if (!els.mobileSchedule) return;
  els.mobileSchedule.innerHTML = "";

  if (!events.length) {
    els.mobileSchedule.innerHTML = `<div class="mobile-empty">No courses added yet.</div>`;
    return;
  }
  const insights = scheduleInsights(events, overlapSet);
  els.mobileSchedule.innerHTML = `
    <div class="mobile-agenda-overview">
      <div><strong>${insights.scoreLabel}</strong><span>${insights.score}/100 quality</span></div>
      <div><strong>${formatHours(insights.totalHours)}</strong><span>Class time</span></div>
      <div><strong>${insights.freeDays}</strong><span>Free days</span></div>
    </div>
  `;

  const grouped = {};
  for (const day of CALENDAR_DAYS) grouped[day] = [];
  for (const ev of events) {
    if (!grouped[ev.dayCode]) grouped[ev.dayCode] = [];
    grouped[ev.dayCode].push(ev);
  }

  for (const day of CALENDAR_DAYS) {
    const dayEvents = (grouped[day] || []).sort((a, b) =>
      String(a.time).localeCompare(String(b.time)) || String(a.code).localeCompare(String(b.code))
    );
    const section = document.createElement("section");
    section.className = "mobile-day-group";
    section.innerHTML = `<div class="mobile-day-title">${formatDayLabel(day)}</div>`;
    if (!dayEvents.length) {
      section.innerHTML += `<div class="mobile-day-empty">No classes</div>`;
    } else {
      const list = document.createElement("div");
      list.className = "mobile-day-list";
      for (const ev of dayEvents) {
        const isOverlap = overlapSet.has(ev.unique);
        const item = document.createElement("article");
        item.className = "mobile-course-card";
        if (ev.restricted) item.classList.add("restricted");
        if (isOverlap) item.classList.add("overlap");
        item.innerHTML = `
          <div class="mobile-card-top">
            <div>
              <div class="mobile-course-code">${ev.code}</div>
              <div class="mobile-course-meta">${ev.section || "-"} - ${ev.room || "No room listed"}</div>
            </div>
            <button class="mobile-remove-btn" type="button">Remove</button>
          </div>
          <div class="mobile-time">${displayTime(ev.time)}</div>
          <div class="mobile-faculty">${ev.faculty || "-"}</div>
          <div class="mobile-badges">
            ${ev.restricted ? '<span class="restricted-inline">RESTRICTED</span>' : ''}
            ${isOverlap ? '<span class="restricted-inline">CONFLICT</span>' : ''}
          </div>
        `;
        item.querySelector(".mobile-remove-btn").addEventListener("click", () => {
          removeFromSchedule(ev);
          saveSchedule();
          renderSchedule();
        });
        list.appendChild(item);
      }
      section.appendChild(list);
    }
    els.mobileSchedule.appendChild(section);
  }
}


function expandScheduleEntries() {
  const events = [];
  for (const course of state.schedule) {
    const range = parseTimeRange(course.time);
    const days = normalizeCourseDays(course);
    if (!days.length) {
      events.push({ ...course, dayCode: String(course.day || "-"), unique: uniqueId(course), range });
    } else {
      for (const dayCode of days) {
        events.push({ ...course, dayCode, unique: `${uniqueId(course)}__${dayCode}`, range });
      }
    }
  }
  return events;
}

function hasOverlap(a, b) {
  if (!a.range || !b.range) return false;
  return a.dayCode === b.dayCode && a.range.start < b.range.end && a.range.end > b.range.start;
}

function conflictPairsForEvents(events) {
  const pairs = [];
  for (let i = 0; i < events.length; i++) {
    for (let j = i + 1; j < events.length; j++) {
      if (hasOverlap(events[i], events[j])) pairs.push([events[i], events[j]]);
    }
  }
  return pairs;
}

function courseConflictsWithList(course, list) {
  const candidateDays = normalizeCourseDays(course);
  const candidateRange = parseTimeRange(course.time);
  if (!candidateDays.length || !candidateRange) return false;
  return list.some((item) => {
    const itemRange = parseTimeRange(item.time);
    if (!itemRange) return false;
    return normalizeCourseDays(item).some((day) =>
      candidateDays.includes(day) &&
      candidateRange.start < itemRange.end &&
      candidateRange.end > itemRange.start
    );
  });
}

function alternativesForCourse(course) {
  const baseSchedule = state.schedule.filter(item => uniqueId(item) !== uniqueId(course));
  return state.courses
    .filter(item => item.code === course.code && uniqueId(item) !== uniqueId(course))
    .filter(item => !courseConflictsWithList(item, baseSchedule))
    .sort((a, b) => String(a.time).localeCompare(String(b.time)) || String(a.section).localeCompare(String(b.section)))
    .slice(0, 4);
}

function replaceCourse(current, next) {
  state.schedule = state.schedule.map(item => uniqueId(item) === uniqueId(current) ? next : item);
  saveSchedule();
  renderSchedule();
  showToast(`${current.code} ${current.section || ""} replaced with ${next.section || "another section"}.`);
}

function renderConflictFixer(conflictPairs) {
  if (!els.conflictFixer) return;
  const conflictCourses = [];
  const seen = new Set();
  conflictPairs.flat().forEach((event) => {
    const id = uniqueId(event);
    if (!seen.has(id)) {
      seen.add(id);
      conflictCourses.push(event);
    }
  });

  if (!conflictCourses.length) {
    els.conflictFixer.innerHTML = `
      <div class="fixer-empty">
        <strong>No conflict fixes needed</strong>
        <span>COSFinder will suggest alternate sections here if classes overlap.</span>
      </div>
    `;
    return;
  }

  els.conflictFixer.innerHTML = `
    <div class="fixer-heading">
      <div>
        <strong>Conflict fixer</strong>
        <span>Try alternate sections that fit your current calendar.</span>
      </div>
      <svg><use href="#icon-wand"></use></svg>
    </div>
    <div class="fixer-list"></div>
  `;
  const list = els.conflictFixer.querySelector(".fixer-list");
  conflictCourses.slice(0, 6).forEach((course) => {
    const alternatives = alternativesForCourse(course);
    const item = document.createElement("article");
    item.className = "fixer-card";
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(course.code || "-")} ${escapeHtml(course.section || "")}</strong>
        <span>${escapeHtml(displayTime(course.time))} | ${escapeHtml(course.room || "No room listed")}</span>
      </div>
      <div class="fixer-options"></div>
    `;
    const options = item.querySelector(".fixer-options");
    if (!alternatives.length) {
      options.innerHTML = `<span class="fixer-none">No fitting alternate section found.</span>`;
    } else {
      alternatives.forEach((alt) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "fix-btn";
        button.textContent = `${alt.section || "-"} | ${displayTime(alt.time)} | ${alt.room || "No room"}`;
        button.addEventListener("click", () => replaceCourse(course, alt));
        options.appendChild(button);
      });
    }
    list.appendChild(item);
  });
}

function scheduleInsights(events, overlapSet) {
  const ranges = events.map(ev => ev.range).filter(Boolean);
  const dayGroups = Object.fromEntries(CALENDAR_DAYS.map((day) => [day, events.filter(ev => ev.dayCode === day && ev.range)]));
  const activeDays = CALENDAR_DAYS.filter(day => dayGroups[day].length);
  const freeDays = CALENDAR_DAYS.length - activeDays.length;
  const totalHours = ranges.reduce((sum, range) => sum + Math.max(0, range.end - range.start), 0);
  const earliest = ranges.length ? Math.min(...ranges.map(range => range.start)) : null;
  const latest = ranges.length ? Math.max(...ranges.map(range => range.end)) : null;
  let longestBreak = 0;
  let longestBreakDay = "";

  CALENDAR_DAYS.forEach((day) => {
    const sorted = dayGroups[day].slice().sort((a, b) => a.range.start - b.range.start);
    for (let i = 0; i < sorted.length - 1; i += 1) {
      const gap = sorted[i + 1].range.start - sorted[i].range.end;
      if (gap > longestBreak) {
        longestBreak = gap;
        longestBreakDay = day;
      }
    }
  });

  const dayCounts = CALENDAR_DAYS.map(day => [day, dayGroups[day].length]);
  const busiest = dayCounts.slice().sort((a, b) => b[1] - a[1])[0];
  let score = 100;
  score -= overlapSet.size * 12;
  if (longestBreak >= 3) score -= 10;
  if (latest !== null && latest > 19) score -= 7;
  if (earliest !== null && earliest < 8) score -= 5;
  if (activeDays.length >= 6) score -= 8;
  score = Math.max(0, Math.min(100, Math.round(score)));
  const scoreLabel = overlapSet.size ? "Needs fixes" : score >= 88 ? "Excellent" : score >= 74 ? "Balanced" : score >= 58 ? "Manageable" : "Heavy";
  return {
    activeDays,
    freeDays,
    totalHours,
    earliest,
    latest,
    busiest,
    longestBreak,
    longestBreakDay,
    score,
    scoreLabel,
  };
}

function formatHours(value) {
  const rounded = Math.round(value * 10) / 10;
  return `${rounded} hr${rounded === 1 ? "" : "s"}`;
}

function renderTimeAxis() {
  els.timeAxis.innerHTML = "";
  const totalHours = END_HOUR - START_HOUR;
  els.timeAxis.style.height = `${totalHours * HOUR_HEIGHT}px`;
  for (let hour = START_HOUR; hour <= END_HOUR; hour++) {
    const label = document.createElement("div");
    label.className = "time-label";
    label.style.top = `${(hour - START_HOUR) * HOUR_HEIGHT}px`;
    const suffix = hour >= 12 ? "PM" : "AM";
    const normalized = hour % 12 || 12;
    label.textContent = `${normalized} ${suffix}`;
    els.timeAxis.appendChild(label);
  }
}

function renderSchedule() {
  const events = expandScheduleEntries().sort((a, b) =>
    CALENDAR_DAYS.indexOf(a.dayCode) - CALENDAR_DAYS.indexOf(b.dayCode) ||
    String(a.time).localeCompare(String(b.time)) ||
    String(a.code).localeCompare(String(b.code))
  );

  const conflictPairs = conflictPairsForEvents(events);
  const overlapSet = new Set();
  conflictPairs.forEach(([a, b]) => {
    overlapSet.add(a.unique);
    overlapSet.add(b.unique);
  });
  const insights = scheduleInsights(events, overlapSet);

  renderTimeAxis();
  els.calendarGrid.innerHTML = "";
  const totalHeight = (END_HOUR - START_HOUR) * HOUR_HEIGHT;
  els.calendarGrid.style.height = `${totalHeight}px`;

  for (const day of CALENDAR_DAYS) {
    const col = document.createElement("div");
    col.className = "calendar-col";
    const dayEvents = events.filter(ev => ev.dayCode === day);

    if (!dayEvents.length) {
      const empty = document.createElement("div");
      empty.className = "calendar-empty";
      empty.textContent = "";
      col.appendChild(empty);
    } else {
      for (const ev of dayEvents) {
        const card = document.createElement("div");
        const isOverlap = overlapSet.has(ev.unique);
        card.className = "calendar-event";
        if (isOverlap) card.classList.add("overlap");
        if (ev.restricted) card.classList.add("restricted");

        let top = 8;
        let height = 72;
        if (ev.range) {
          top = Math.max(0, (ev.range.start - START_HOUR) * HOUR_HEIGHT);
          height = Math.max(54, (ev.range.end - ev.range.start) * HOUR_HEIGHT - 8);
        }

        card.style.top = `${top}px`;
        card.style.height = `${height}px`;

        card.innerHTML = `
          <div class="event-code">${ev.code}</div>
          <div class="event-time">${displayTime(ev.time)} - ${formatDayLabel(ev.dayCode)}</div>
          <div class="event-room">${ev.room || "No room listed"} - ${ev.section || "-"}</div>
          <div class="event-faculty">${ev.faculty || "-"}</div>
          <div class="event-badges">
            ${ev.restricted ? '<span class="event-chip alert">RESTRICTED</span>' : ''}
            ${isOverlap ? '<span class="event-chip alert">CONFLICT</span>' : ''}
          </div>
        `;
        card.addEventListener("click", () => {
          removeFromSchedule(ev);
          saveSchedule();
          renderSchedule();
        });
        col.appendChild(card);
      }
    }
    els.calendarGrid.appendChild(col);
  }

  renderMobileSchedule(events, overlapSet);

  const pills = [];
  pills.push(`<span class="status-pill">${state.schedule.length} course${state.schedule.length === 1 ? "" : "s"} in schedule</span>`);
  if (state.schedule.length) pills.push(`<span class="status-pill score">${insights.scoreLabel} - ${insights.score}/100</span>`);
  if (overlapSet.size) pills.push(`<span class="status-pill alert">${overlapSet.size} conflicting block${overlapSet.size === 1 ? "" : "s"}</span>`);
  else if (state.schedule.length) pills.push(`<span class="status-pill ok">No time conflicts detected</span>`);
  if (!state.schedule.length) els.statusBar.innerHTML = `<span class="status-pill">No courses added yet</span>`;
  else els.statusBar.innerHTML = pills.join("");
  renderConflictFixer(conflictPairs);
  renderScheduleSummary(events, overlapSet, insights);
  renderPresets();
  applyFilters();
}

function removeFromSchedule(ev) {
  const removed = state.schedule.find(item => uniqueId(item) === uniqueId(ev));
  state.schedule = state.schedule.filter(item => uniqueId(item) !== uniqueId(ev));
  if (removed) {
    state.undo = { type: "remove", course: removed };
    showToast(`${ev.code} removed from your calendar.`, "Undo", () => {
      state.schedule.push(removed);
      saveSchedule();
      renderSchedule();
      showToast(`${removed.code} restored.`);
    });
  }
}

function renderScheduleSummary(events, overlapSet, insights = scheduleInsights(events, overlapSet)) {
  if (!els.scheduleSummary) return;
  if (!events.length) {
    els.scheduleSummary.innerHTML = `<div class="summary-wide"><strong>Start adding classes</strong><span>Your schedule summary will appear here.</span></div>`;
    return;
  }
  const online = state.schedule.filter(course => matchesMode(course, "ONLINE")).length;
  const hybrid = state.schedule.filter(course => matchesMode(course, "HYBRID")).length;
  const items = [
    ["Quality", `${insights.scoreLabel} ${insights.score}/100`],
    ["Courses", state.schedule.length],
    ["Blocks", events.length],
    ["Class Hours", formatHours(insights.totalHours)],
    ["Earliest", insights.earliest === null ? "-" : hourToLabel(insights.earliest)],
    ["Latest", insights.latest === null ? "-" : hourToLabel(insights.latest)],
    ["Busiest", insights.busiest?.[1] ? `${formatDayLabel(insights.busiest[0])} (${insights.busiest[1]})` : "-"],
    ["Free Days", insights.freeDays],
    ["Longest Gap", insights.longestBreak ? `${formatHours(insights.longestBreak)} ${formatDayLabel(insights.longestBreakDay)}` : "None"],
    ["Online", online],
    ["Hybrid", hybrid],
    ["Conflicts", overlapSet.size],
  ];
  els.scheduleSummary.innerHTML = items.map(([label, value]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("");
}

function hourToLabel(value) {
  const hh = Math.floor(value);
  const mm = Math.round((value - hh) * 60);
  return to12h(`${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`);
}

function renderPresets() {
  if (!els.presetSelect) return;
  const selected = els.presetSelect.value;
  els.presetSelect.innerHTML = `<option value="">Saved schedules</option>`;
  state.presets.forEach((preset) => {
    const option = document.createElement("option");
    option.value = preset.id;
    option.textContent = preset.title;
    els.presetSelect.appendChild(option);
  });
  if (state.presets.some(preset => preset.id === selected)) els.presetSelect.value = selected;
}

function saveCurrentPreset() {
  const title = (els.scheduleTitleInput?.value.trim() || state.scheduleTitle || "").trim();
  if (!title) {
    showToast("Write a schedule title before saving a preset.");
    els.scheduleTitleInput?.focus();
    return;
  }
  const preset = {
    id: `${Date.now()}`,
    title,
    studentId: state.studentId,
    schedule: state.schedule.map(course => ({ ...course })),
    createdAt: new Date().toISOString(),
  };
  const existingIndex = state.presets.findIndex(item => item.title.toLowerCase() === title.toLowerCase());
  if (existingIndex >= 0) state.presets[existingIndex] = { ...preset, id: state.presets[existingIndex].id };
  else state.presets.push(preset);
  savePresets();
  renderPresets();
  els.presetSelect.value = existingIndex >= 0 ? state.presets[existingIndex].id : preset.id;
  showToast(`Saved preset "${title}".`);
}

function loadSelectedPreset() {
  const preset = state.presets.find(item => item.id === els.presetSelect?.value);
  if (!preset) {
    showToast("Choose a saved schedule first.");
    return;
  }
  const previous = { title: state.scheduleTitle, schedule: [...state.schedule] };
  state.schedule = (preset.schedule || []).map(course => ({ ...course }));
  state.scheduleTitle = preset.title || "";
  if (els.scheduleTitleInput) els.scheduleTitleInput.value = state.scheduleTitle;
  localStorage.setItem("cosfinder-schedule-title", state.scheduleTitle);
  saveSchedule();
  renderSchedule();
  showToast(`Loaded "${state.scheduleTitle}".`, "Undo", () => {
    state.schedule = previous.schedule;
    state.scheduleTitle = previous.title;
    if (els.scheduleTitleInput) els.scheduleTitleInput.value = state.scheduleTitle;
    localStorage.setItem("cosfinder-schedule-title", state.scheduleTitle);
    saveSchedule();
    renderSchedule();
    showToast("Previous schedule restored.");
  });
}

function deleteSelectedPreset() {
  const preset = state.presets.find(item => item.id === els.presetSelect?.value);
  if (!preset) {
    showToast("Choose a saved schedule first.");
    return;
  }
  if (!confirm(`Delete saved schedule "${preset.title}"?`)) return;
  state.presets = state.presets.filter(item => item.id !== preset.id);
  savePresets();
  renderPresets();
  showToast(`Deleted preset "${preset.title}".`);
}

function initHelpCenter() {
  els.helpSearchInput?.addEventListener("input", filterHelpContent);
  els.helpJumpButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.helpJump);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      target.classList.add("help-focus");
      setTimeout(() => target.classList.remove("help-focus"), 900);
    });
  });
}

function filterHelpContent() {
  const query = (els.helpSearchInput?.value || "").trim().toLowerCase();
  const items = [...document.querySelectorAll("#helpPanel .tutorial-list li, #helpPanel .tip-grid article, #helpPanel .playbook-grid article, #helpPanel .faq-list details, #helpPanel .troubleshooting-list details")];
  let visibleItems = 0;

  items.forEach((item) => {
    const matches = !query || item.textContent.toLowerCase().includes(query);
    item.classList.toggle("help-hidden", !matches);
    if (matches) visibleItems += 1;
    if (query && matches && item.tagName === "DETAILS") item.open = true;
  });

  document.querySelectorAll("#helpPanel [data-help-section]").forEach((section) => {
    const titleMatches = section.querySelector("h3")?.textContent.toLowerCase().includes(query);
    const hasVisibleChild = [...section.querySelectorAll(".tutorial-list li, .tip-grid article, .playbook-grid article, .faq-list details, .troubleshooting-list details")]
      .some((child) => !child.classList.contains("help-hidden"));
    section.classList.toggle("help-hidden", Boolean(query) && !titleMatches && !hasVisibleChild);
  });

  if (els.helpSearchMeta) {
    els.helpSearchMeta.textContent = query
      ? `${visibleItems} help item${visibleItems === 1 ? "" : "s"} matched "${query}".`
      : "Search across tutorials, feature guides, and FAQs.";
  }
}

function init() {

  applyTheme();
  if (els.paperSizeSelect) els.paperSizeSelect.value = localStorage.getItem("cosfinder-paper-size") || "letter";
  if (els.orientationSelect) els.orientationSelect.value = localStorage.getItem("cosfinder-pdf-orientation") || "landscape";
  renderStudentId();
  requireLogin();
  if (els.scheduleTitleInput) els.scheduleTitleInput.value = state.scheduleTitle;
  renderFilters();
  applyFilters();
  renderSchedule();

  els.searchInput.addEventListener("input", applyFilters);
  els.departmentFilter.addEventListener("change", applyFilters);
  [els.dayFilter, els.timeFilter, els.modeFilter, els.restrictedOnlyFilter, els.noConflictFilter, els.favoritesOnlyFilter]
    .filter(Boolean)
    .forEach((control) => control.addEventListener("change", applyFilters));
  els.clearFavoritesBtn?.addEventListener("click", () => {
    if (!state.favorites.size) {
      showToast("No pinned courses yet.");
      return;
    }
    state.favorites.clear();
    saveFavorites();
    applyFilters();
    showToast("Pinned courses cleared.");
  });
  els.themeToggleBtn?.addEventListener("click", toggleTheme);
  els.paperSizeSelect?.addEventListener("change", () => {
    localStorage.setItem("cosfinder-paper-size", els.paperSizeSelect.value);
  });
  els.orientationSelect?.addEventListener("change", () => {
    localStorage.setItem("cosfinder-pdf-orientation", els.orientationSelect.value);
  });
  els.loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = els.studentIdInput.value.trim();
    if (!/^12\d{6}$/.test(id)) {
      els.loginError.textContent = 'ID must follow the format "12xxxxxx".';
      return;
    }
    els.loginError.textContent = "";
    saveStudentId(id, els.rememberIdInput.checked);
    requireLogin();
    showToast(`Welcome, ID ${id}.`);
  });
  els.changeIdBtn?.addEventListener("click", () => {
    state.studentId = "";
    sessionStorage.removeItem("cosfinder-student-id");
    localStorage.removeItem("cosfinder-student-id");
    renderStudentId();
    requireLogin();
  });
  els.scheduleTitleInput?.addEventListener("input", () => {
    state.scheduleTitle = els.scheduleTitleInput.value.trim();
    localStorage.setItem("cosfinder-schedule-title", state.scheduleTitle);
  });
  els.exportButtons.forEach((button) => {
    button.addEventListener("click", () => exportSchedule(button.dataset.export));
  });
  els.previewExportBtn?.addEventListener("click", openExportPreview);
  els.closePreviewBtn?.addEventListener("click", closeExportPreview);
  els.exportPreviewModal?.addEventListener("click", (event) => {
    if (event.target === els.exportPreviewModal) closeExportPreview();
  });
  els.previewExportButtons.forEach((button) => {
    button.addEventListener("click", () => {
      closeExportPreview();
      exportSchedule(button.dataset.previewExport);
    });
  });
  els.savePresetBtn?.addEventListener("click", saveCurrentPreset);
  els.loadPresetBtn?.addEventListener("click", loadSelectedPreset);
  els.deletePresetBtn?.addEventListener("click", deleteSelectedPreset);
  initHelpCenter();
  els.clearScheduleBtn.addEventListener("click", () => {
    if (!state.schedule.length) {
      showToast("Calendar is already empty.");
      return;
    }
    if (!confirm("Reset your calendar and remove all selected classes?")) return;
    const previous = [...state.schedule];
    state.schedule = [];
    saveSchedule();
    renderSchedule();
    showToast("Calendar reset. All selected classes were removed.", "Undo", () => {
      state.schedule = previous;
      saveSchedule();
      renderSchedule();
      showToast("Calendar restored.");
    });
  });
}

init();


function initTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  const panels = [...document.querySelectorAll(".tab-panel")];

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      panels.forEach((panel) => panel.classList.add("tab-hidden"));

      btn.classList.add("active");
      const target = document.getElementById(btn.dataset.target);
      if (target) target.classList.remove("tab-hidden");
    });
  });
}

initTabs();

function getAudioContext() {
  if (!soundState.enabled) return null;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  if (!soundState.ctx) soundState.ctx = new AudioContext();
  if (soundState.ctx.state === "suspended") soundState.ctx.resume();
  return soundState.ctx;
}

function playSound(type = "tap") {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const gain = ctx.createGain();
  const osc = ctx.createOscillator();
  const settings = {
    tap: [520, 0.035, 0.035],
    tab: [660, 0.045, 0.04],
    add: [880, 0.07, 0.055],
    clear: [260, 0.08, 0.05],
  }[type] || [520, 0.035, 0.035];

  osc.type = "sine";
  osc.frequency.setValueAtTime(settings[0], now);
  if (type === "add") osc.frequency.exponentialRampToValueAtTime(1320, now + settings[1]);
  gain.gain.setValueAtTime(settings[2], now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + settings[1]);
  osc.connect(gain).connect(ctx.destination);
  osc.start(now);
  osc.stop(now + settings[1] + 0.02);
}

function burst(anchor) {
  const rect = anchor.getBoundingClientRect();
  for (let i = 0; i < 8; i += 1) {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.style.left = `${rect.left + rect.width / 2}px`;
    spark.style.top = `${rect.top + rect.height / 2}px`;
    spark.style.setProperty("--x", `${Math.cos(i * 0.78) * 42}px`);
    spark.style.setProperty("--y", `${Math.sin(i * 0.78) * 42}px`);
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 700);
  }
}

let toastTimer;
function showToast(message, actionLabel, action) {
  if (!els.toast) return;
  els.toast.innerHTML = "";
  const text = document.createElement("span");
  text.textContent = message;
  els.toast.appendChild(text);
  if (actionLabel && action) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = actionLabel;
    button.addEventListener("click", () => {
      clearTimeout(toastTimer);
      els.toast.classList.remove("show");
      action();
    });
    els.toast.appendChild(button);
  }
  els.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    els.toast.classList.remove("show");
  }, 2400);
}

function scheduleTitle() {
  return state.scheduleTitle || "COSFinder Schedule";
}

function exportLayout() {
  return els.exportLayoutSelect?.value || "list";
}

function fileStem(format, layout = exportLayout()) {
  const title = scheduleTitle().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "cosfinder-schedule";
  const id = state.studentId || "student";
  const suffix = layout === "calendar" ? "calendar" : "list";
  return `${title}-${id}-${suffix}.${format}`;
}

function exportRows() {
  return expandScheduleEntries()
    .sort((a, b) =>
      CALENDAR_DAYS.indexOf(a.dayCode) - CALENDAR_DAYS.indexOf(b.dayCode) ||
      String(a.time).localeCompare(String(b.time)) ||
      String(a.code).localeCompare(String(b.code))
    )
    .map((ev) => ({
      day: formatDayLabel(ev.dayCode),
      time: displayTime(ev.time),
      code: ev.code || "-",
      section: ev.section || "-",
      department: ev.department || "-",
      faculty: ev.faculty || "-",
      room: ev.room || "No room listed",
      mode: ev.mode || "-",
      remarks: ev.restricted ? "RESTRICTED" : "",
    }));
}

function exportCalendarEvents() {
  return expandScheduleEntries()
    .filter((ev) => CALENDAR_DAYS.includes(ev.dayCode))
    .sort((a, b) =>
      CALENDAR_DAYS.indexOf(a.dayCode) - CALENDAR_DAYS.indexOf(b.dayCode) ||
      String(a.time).localeCompare(String(b.time)) ||
      String(a.code).localeCompare(String(b.code))
    );
}

function groupedCalendarEvents() {
  const groups = Object.fromEntries(CALENDAR_DAYS.map((day) => [day, []]));
  exportCalendarEvents().forEach((event) => groups[event.dayCode].push(event));
  return groups;
}

function calendarExportBounds(events) {
  const ranges = events
    .map((event) => event.range || parseTimeRange(event.time))
    .filter(Boolean);
  if (!ranges.length) return { startHour: 7, endHour: 18 };

  const earliest = Math.min(...ranges.map((range) => range.start));
  const latest = Math.max(...ranges.map((range) => range.end));
  const startHour = Math.max(6, Math.floor(earliest));
  const endHour = Math.min(23, Math.max(startHour + 4, Math.ceil(latest)));
  return { startHour, endHour };
}

function calendarEventsWithLayout(events) {
  const laidOut = [];
  const eventsByDay = Object.fromEntries(CALENDAR_DAYS.map((day) => [day, []]));

  events.forEach((event) => {
    const range = event.range || parseTimeRange(event.time);
    if (!range || !eventsByDay[event.dayCode]) return;
    eventsByDay[event.dayCode].push({ ...event, range });
  });

  CALENDAR_DAYS.forEach((day) => {
    const dayEvents = eventsByDay[day].sort((a, b) =>
      a.range.start - b.range.start ||
      a.range.end - b.range.end ||
      String(a.code).localeCompare(String(b.code))
    );
    let cluster = [];
    let clusterEnd = -Infinity;

    const assignCluster = () => {
      if (!cluster.length) return;
      const laneEnds = [];
      cluster.forEach((event) => {
        let lane = laneEnds.findIndex((end) => end <= event.range.start);
        if (lane === -1) lane = laneEnds.length;
        laneEnds[lane] = event.range.end;
        event.lane = lane;
      });
      cluster.forEach((event) => {
        event.laneCount = Math.max(1, laneEnds.length);
        laidOut.push(event);
      });
    };

    dayEvents.forEach((event) => {
      if (!cluster.length || event.range.start < clusterEnd) {
        cluster.push(event);
        clusterEnd = Math.max(clusterEnd, event.range.end);
        return;
      }
      assignCluster();
      cluster = [event];
      clusterEnd = event.range.end;
    });
    assignCluster();
  });

  return laidOut;
}

function hexToRgb(hex) {
  const value = String(hex || "").replace("#", "");
  const normalized = value.length === 3
    ? value.split("").map((char) => char + char).join("")
    : value.padEnd(6, "0").slice(0, 6);
  const number = Number.parseInt(normalized, 16);
  return {
    r: (number >> 16) & 255,
    g: (number >> 8) & 255,
    b: number & 255,
  };
}

function shiftHexColor(hex, amount) {
  const rgb = hexToRgb(hex);
  const clamp = (value) => Math.max(0, Math.min(255, value));
  const toHex = (value) => clamp(value).toString(16).padStart(2, "0");
  return `#${toHex(rgb.r + amount)}${toHex(rgb.g + amount)}${toHex(rgb.b + amount)}`;
}

function canvasFitText(ctx, text, maxWidth) {
  if (!Number.isFinite(maxWidth) || maxWidth <= 0) return "";
  const value = String(text || "-");
  if (ctx.measureText(value).width <= maxWidth) return value;
  let output = value;
  while (output.length > 1 && ctx.measureText(`${output}...`).width > maxWidth) {
    output = output.slice(0, -1);
  }
  return `${output.trim()}...`;
}

function drawCanvasText(ctx, text, x, y, maxWidth) {
  ctx.fillText(canvasFitText(ctx, text, maxWidth), x, y);
}

function calendarLegendItems(events) {
  return [...new Set(events.map((event) => event.department).filter(Boolean))].slice(0, 5);
}

function exportSchedule(format) {
  if (!state.schedule.length) {
    showToast("Add at least one class before saving your schedule.");
    return;
  }
  state.scheduleTitle = els.scheduleTitleInput?.value.trim() || state.scheduleTitle;
  localStorage.setItem("cosfinder-schedule-title", state.scheduleTitle);
  const layout = exportLayout();
  if (format === "png" || format === "jpg") exportImage(format, layout);
  if (format === "xls") exportExcel(layout);
  if (format === "pdf") exportPdf(layout);
  if (format === "ics") exportIcs();
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function openExportPreview() {
  if (!state.schedule.length) {
    showToast("Add at least one class before previewing your schedule.");
    return;
  }
  if (!els.exportPreviewModal || !els.exportPreviewBody) return;
  const layout = exportLayout();
  const events = exportCalendarEvents();
  const rows = exportRows();
  const insights = scheduleInsights(expandScheduleEntries(), new Set());
  if (layout === "calendar") {
    const grouped = groupedCalendarEvents();
    els.exportPreviewBody.innerHTML = `
      <div class="preview-sheet calendar-preview-sheet">
        <div class="preview-cover">
          <img src="assets/cosfinder-logo.svg" alt="" />
          <div>
            <h3>${escapeHtml(scheduleTitle())}</h3>
            <p>COSFinder weekly calendar | ID ${escapeHtml(state.studentId || "-")} | ${events.length} blocks</p>
          </div>
          <span>${escapeHtml(insights.scoreLabel)} ${insights.score}/100</span>
        </div>
        <div class="preview-week">
          ${CALENDAR_DAYS.map((day) => `
            <section>
              <strong>${escapeHtml(formatDayLabel(day))}</strong>
              ${(grouped[day] || []).length ? grouped[day].map((event) => `
                <article style="border-left-color:${departmentColor(event.department)}">
                  <b>${escapeHtml(event.code || "-")} ${escapeHtml(event.section || "")}</b>
                  <small>${escapeHtml(displayTime(event.time))}</small>
                  <span>${escapeHtml(event.room || "No room listed")}</span>
                </article>
              `).join("") : '<em>No classes</em>'}
            </section>
          `).join("")}
        </div>
      </div>
    `;
  } else {
    els.exportPreviewBody.innerHTML = `
      <div class="preview-sheet">
        <div class="preview-cover">
          <img src="assets/cosfinder-logo.svg" alt="" />
          <div>
            <h3>${escapeHtml(scheduleTitle())}</h3>
            <p>Detailed schedule list | ID ${escapeHtml(state.studentId || "-")}</p>
          </div>
          <span>${rows.length} rows</span>
        </div>
        <div class="preview-table-wrap">
          <table>
            <thead><tr><th>Day</th><th>Time</th><th>Code</th><th>Section</th><th>Room</th><th>Faculty</th></tr></thead>
            <tbody>${rows.map((row) => `<tr><td>${escapeHtml(row.day)}</td><td>${escapeHtml(row.time)}</td><td>${escapeHtml(row.code)}</td><td>${escapeHtml(row.section)}</td><td>${escapeHtml(row.room)}</td><td>${escapeHtml(row.faculty)}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </div>
    `;
  }
  els.exportPreviewModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeExportPreview() {
  els.exportPreviewModal?.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function printPageSettings() {
  const size = els.paperSizeSelect?.value || localStorage.getItem("cosfinder-paper-size") || "letter";
  const orientation = els.orientationSelect?.value || localStorage.getItem("cosfinder-pdf-orientation") || "landscape";
  const base = size === "a4" ? { width: 595, height: 842 } : { width: 612, height: 792 };
  const isLandscape = orientation === "landscape";
  return {
    size,
    orientation,
    pageWidth: isLandscape ? Math.max(base.width, base.height) : Math.min(base.width, base.height),
    pageHeight: isLandscape ? Math.min(base.width, base.height) : Math.max(base.width, base.height),
  };
}

function exportIcs() {
  const events = exportCalendarEvents();
  const baseMonday = upcomingMonday();
  const stamp = icsDateTime(new Date(), true);
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//COSFinder//Schedule Planner//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:${icsEscape(scheduleTitle())}`,
  ];
  events.forEach((event, index) => {
    const range = event.range || parseTimeRange(event.time);
    const dayIndex = CALENDAR_DAYS.indexOf(event.dayCode);
    if (!range || dayIndex < 0) return;
    const date = new Date(baseMonday);
    date.setDate(baseMonday.getDate() + dayIndex);
    const start = dateWithDecimalHour(date, range.start);
    const end = dateWithDecimalHour(date, range.end);
    lines.push(
      "BEGIN:VEVENT",
      `UID:${Date.now()}-${index}-${safeIcsId(uniqueId(event))}@cosfinder`,
      `DTSTAMP:${stamp}`,
      `DTSTART:${icsDateTime(start)}`,
      `DTEND:${icsDateTime(end)}`,
      "RRULE:FREQ=WEEKLY;COUNT=16",
      `SUMMARY:${icsEscape(`${event.code || "Class"} ${event.section || ""}`.trim())}`,
      `LOCATION:${icsEscape(event.room || "No room listed")}`,
      `DESCRIPTION:${icsEscape(`${event.department || "-"} | ${event.faculty || "-"} | ${event.mode || "-"} | Generated by COSFinder`)}`,
      "END:VEVENT"
    );
  });
  lines.push("END:VCALENDAR");
  downloadBlob(new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" }), fileStem("ics", "calendar"));
  showToast("Calendar import file saved.");
}

function upcomingMonday() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  const day = date.getDay();
  const offset = day === 1 ? 0 : (8 - day) % 7;
  date.setDate(date.getDate() + offset);
  return date;
}

function dateWithDecimalHour(date, decimalHour) {
  const output = new Date(date);
  const hour = Math.floor(decimalHour);
  const minute = Math.round((decimalHour - hour) * 60);
  output.setHours(hour, minute, 0, 0);
  return output;
}

function icsDateTime(date, utc = false) {
  const source = utc ? new Date(date) : date;
  const pad = (value) => String(value).padStart(2, "0");
  if (utc) {
    return `${source.getUTCFullYear()}${pad(source.getUTCMonth() + 1)}${pad(source.getUTCDate())}T${pad(source.getUTCHours())}${pad(source.getUTCMinutes())}${pad(source.getUTCSeconds())}Z`;
  }
  return `${source.getFullYear()}${pad(source.getMonth() + 1)}${pad(source.getDate())}T${pad(source.getHours())}${pad(source.getMinutes())}00`;
}

function icsEscape(value) {
  return String(value || "").replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

function safeIcsId(value) {
  return String(value || "event").replace(/[^a-z0-9]+/gi, "-").replace(/(^-|-$)/g, "").toLowerCase();
}

function exportExcel(layout = "list") {
  if (layout === "calendar") {
    exportCalendarExcel();
    return;
  }
  const rows = exportRows();
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  const tableRows = rows.map((row) => `
    <tr>
      <td>${escapeHtml(row.day)}</td><td>${escapeHtml(row.time)}</td><td>${escapeHtml(row.code)}</td>
      <td>${escapeHtml(row.section)}</td><td>${escapeHtml(row.department)}</td><td>${escapeHtml(row.faculty)}</td>
      <td>${escapeHtml(row.room)}</td><td>${escapeHtml(row.mode)}</td><td>${escapeHtml(row.remarks)}</td>
    </tr>`).join("");
  const html = `<!doctype html><html><head><meta charset="utf-8"></head><body>
    <h1>${escapeHtml(scheduleTitle())}</h1>
    <p>Student ID: ${escapeHtml(state.studentId || "-")}</p>
    <p>Generated: ${escapeHtml(new Date().toLocaleString())}</p>
    <table border="1">
      <thead><tr><th>Day</th><th>Time</th><th>Code</th><th>Section</th><th>Department</th><th>Faculty</th><th>Room</th><th>Mode</th><th>Remarks</th></tr></thead>
      <tbody>${tableRows}</tbody>
    </table>
  </body></html>`;
  downloadBlob(new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8" }), fileStem("xls", layout));
  showToast("Excel schedule saved.");
}

function exportCalendarExcel() {
  const events = calendarEventsWithLayout(exportCalendarEvents());
  const { startHour, endHour } = calendarExportBounds(events);
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  const body = Array.from({ length: endHour - startHour }, (_, index) => {
    const hour = startHour + index;
    return `
      <tr>
        <td class="time-cell">${escapeHtml(hourToLabel(hour))}</td>
        ${CALENDAR_DAYS.map((day) => {
          const slotEvents = events.filter((event) =>
            event.dayCode === day &&
            event.range.start >= hour &&
            event.range.start < hour + 1
          );
          return `<td class="day-cell">${slotEvents.map((event) => `
            <div class="event-card" style="border-left-color:${departmentColor(event.department)};">
              <div class="event-code">${escapeHtml(event.code || "-")}</div>
              <div class="event-time">${escapeHtml(displayTime(event.time))}</div>
              <div>${escapeHtml(event.section || "-")} | ${escapeHtml(event.room || "No room listed")}</div>
              <div>${escapeHtml(event.faculty || "-")}</div>
              <div>${escapeHtml(event.department || "-")} ${event.mode ? `- ${escapeHtml(event.mode)}` : ""}</div>
            </div>
          `).join("")}</td>`;
        }).join("")}
      </tr>
    `;
  }).join("");
  const html = `<!doctype html><html><head><meta charset="utf-8">
    <style>
      body { margin: 0; background: #f5f0fb; color: #21162c; font-family: Arial, sans-serif; }
      .sheet { padding: 28px; }
      .header { background: #3f1d62; color: #fff; padding: 24px 28px; border-radius: 18px 18px 0 0; }
      h1 { margin: 0 0 8px; font-size: 30px; }
      .meta { color: #e9dcf5; font-size: 13px; }
      table { width: 100%; border-collapse: collapse; background: #fff; table-layout: fixed; box-shadow: 0 16px 36px rgba(63, 29, 98, .12); }
      th { background: #efe5f8; color: #3f1d62; border: 1px solid #d8c7e7; padding: 12px 8px; text-align: left; font-size: 12px; letter-spacing: .04em; text-transform: uppercase; }
      td { border: 1px solid #eadff4; vertical-align: top; min-height: 74px; padding: 8px; }
      .time-cell { width: 70px; background: #fbf8ff; color: #6f607d; font-weight: 700; text-align: center; }
      .day-cell { height: 88px; }
      .event-card { background: #faf7fd; border-left: 6px solid #5b2a86; border-radius: 10px; margin: 0 0 7px; padding: 8px 9px; line-height: 1.35; }
      .event-code { color: #3f1d62; font-size: 14px; font-weight: 800; }
      .event-time { color: #5f4776; font-weight: 700; }
    </style>
  </head><body>
    <div class="sheet">
      <div class="header">
        <h1>${escapeHtml(scheduleTitle())}</h1>
        <div class="meta">COSFinder weekly calendar | Student ID ${escapeHtml(state.studentId || "-")} | Generated ${escapeHtml(new Date().toLocaleString())} | ${events.length} scheduled blocks</div>
      </div>
      <table>
        <thead><tr><th>Time</th>${CALENDAR_DAYS.map((day) => `<th>${escapeHtml(formatDayLabel(day))}</th>`).join("")}</tr></thead>
        <tbody>${body}</tbody>
    </table>
    </div>
  </body></html>`;
  downloadBlob(new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8" }), fileStem("xls", "calendar"));
  showToast("Calendar-format Excel schedule saved.");
}

function exportImage(format, layout = "list") {
  if (layout === "calendar") {
    exportCalendarImage(format);
    return;
  }
  const rows = exportRows();
  const width = 1400;
  const rowHeight = 54;
  const height = Math.max(760, 210 + rows.length * rowHeight);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#f6f2fb";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#3f1d62";
  ctx.fillRect(0, 0, width, 132);
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 42px Inter, Arial, sans-serif";
  ctx.fillText(scheduleTitle(), 56, 66);
  ctx.font = "700 20px Inter, Arial, sans-serif";
  ctx.fillText(`COSFinder - Student ID ${state.studentId || "-"}`, 56, 102);
  ctx.font = "600 16px Inter, Arial, sans-serif";
  ctx.fillText(`Generated ${new Date().toLocaleString()} - ${rows.length} scheduled blocks`, 890, 102);

  const headers = ["Day", "Time", "Code", "Section", "Room", "Mode", "Faculty"];
  const x = [56, 160, 360, 500, 640, 800, 930];
  ctx.fillStyle = "#efe5f8";
  ctx.fillRect(42, 164, width - 84, 48);
  ctx.fillStyle = "#3f1d62";
  ctx.font = "800 17px Inter, Arial, sans-serif";
  headers.forEach((header, i) => ctx.fillText(header, x[i], 195));
  rows.forEach((row, index) => {
    const y = 228 + index * rowHeight;
    ctx.fillStyle = index % 2 ? "#ffffff" : "#fbf9fd";
    ctx.fillRect(42, y - 32, width - 84, rowHeight);
    ctx.fillStyle = "#22172f";
    ctx.font = "700 16px Inter, Arial, sans-serif";
    [row.day, row.time, row.code, row.section, row.room, row.mode, row.faculty].forEach((value, i) => {
      ctx.fillText(String(value).slice(0, i === 6 ? 36 : 18), x[i], y);
    });
  });
  canvas.toBlob((blob) => {
    if (!blob) return;
    downloadBlob(blob, fileStem(format === "jpg" ? "jpg" : "png", layout));
    showToast(`${format.toUpperCase()} schedule saved.`);
  }, format === "jpg" ? "image/jpeg" : "image/png", 0.94);
}

function exportCalendarImage(format) {
  const events = calendarEventsWithLayout(exportCalendarEvents());
  const { startHour, endHour } = calendarExportBounds(events);
  const width = 1800;
  const margin = 56;
  const headerHeight = 174;
  const legendHeight = 62;
  const dayHeaderHeight = 56;
  const leftAxis = 104;
  const gridLeft = margin + leftAxis;
  const gridRight = width - margin;
  const gridTop = headerHeight + legendHeight + 42;
  const hourHeight = 88;
  const colWidth = (gridRight - gridLeft) / 7;
  const gridStartY = gridTop + dayHeaderHeight;
  const gridHeight = (endHour - startHour) * hourHeight;
  const height = gridStartY + gridHeight + 76;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  const background = ctx.createLinearGradient(0, 0, width, height);
  background.addColorStop(0, "#fbf8ff");
  background.addColorStop(1, "#f2eaf9");
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);
  const headerGradient = ctx.createLinearGradient(0, 0, width, 0);
  headerGradient.addColorStop(0, "#2b143f");
  headerGradient.addColorStop(0.62, "#4d2574");
  headerGradient.addColorStop(1, "#7440a8");
  ctx.fillStyle = headerGradient;
  ctx.fillRect(0, 0, width, headerHeight);

  roundRectCanvas(ctx, margin, 42, 76, 76, 20, "rgba(255,255,255,0.15)");
  ctx.fillStyle = "#ffffff";
  ctx.font = "900 31px Inter, Arial, sans-serif";
  ctx.fillText("CF", margin + 18, 91);
  ctx.fillStyle = "rgba(255,255,255,0.42)";
  ctx.fillRect(margin + 16, 100, 44, 6);

  ctx.fillStyle = "#ffffff";
  ctx.font = "900 42px Inter, Arial, sans-serif";
  drawCanvasText(ctx, scheduleTitle(), margin + 104, 74, 760);
  ctx.font = "700 20px Inter, Arial, sans-serif";
  drawCanvasText(ctx, `COSFinder weekly calendar | Student ID ${state.studentId || "-"}`, margin + 104, 110, 760);
  ctx.fillStyle = "#e9dcf5";
  ctx.font = "600 17px Inter, Arial, sans-serif";
  drawCanvasText(ctx, `Generated ${new Date().toLocaleString()}`, margin + 104, 138, 520);

  const summary = [
    `${events.length} blocks`,
    `${new Set(events.map((event) => event.dayCode)).size} active days`,
    `${hourToLabel(startHour)}-${hourToLabel(endHour)}`,
  ];
  let summaryX = width - margin - summary.reduce((total, item, index) => total + (index === 2 ? 200 : 166), 0) - (summary.length - 1) * 14;
  summary.forEach((item, index) => {
    const pillWidth = index === 2 ? 200 : 166;
    roundRectCanvas(ctx, summaryX, 70, pillWidth, 44, 14, "rgba(255,255,255,0.15)");
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 15px Inter, Arial, sans-serif";
    ctx.fillText(item, summaryX + 18, 98);
    summaryX += pillWidth + 14;
  });

  ctx.shadowColor = "rgba(63, 29, 98, 0.16)";
  ctx.shadowBlur = 28;
  ctx.shadowOffsetY = 18;
  roundRectCanvas(ctx, margin, headerHeight + 24, width - margin * 2, height - headerHeight - 56, 26, "#ffffff");
  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  ctx.fillStyle = "#3f1d62";
  ctx.font = "900 22px Inter, Arial, sans-serif";
  ctx.fillText("Weekly Calendar Format", margin + 28, headerHeight + 64);
  ctx.fillStyle = "#756482";
  ctx.font = "700 14px Inter, Arial, sans-serif";
  ctx.fillText("Designed for quick review, advising, and sharing.", margin + 28, headerHeight + 90);

  let legendX = width - margin - 34;
  calendarLegendItems(events).reverse().forEach((department) => {
    ctx.font = "800 13px Inter, Arial, sans-serif";
    const textWidth = ctx.measureText(department).width;
    legendX -= textWidth + 42;
    ctx.fillStyle = departmentColor(department);
    ctx.beginPath();
    ctx.arc(legendX + 9, headerHeight + 71, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#3f1d62";
    ctx.fillText(department, legendX + 24, headerHeight + 76);
    legendX -= 16;
  });

  roundRectCanvas(ctx, gridLeft, gridTop, gridRight - gridLeft, dayHeaderHeight, 16, "#efe5f8");
  ctx.fillStyle = "#3f1d62";
  ctx.font = "900 16px Inter, Arial, sans-serif";
  CALENDAR_DAYS.forEach((day, index) => {
    const x = gridLeft + index * colWidth;
    ctx.fillText(formatDayLabel(day).toUpperCase(), x + 16, gridTop + 35);
  });

  for (let hour = startHour; hour < endHour; hour += 1) {
    const y = gridStartY + (hour - startHour) * hourHeight;
    ctx.fillStyle = (hour - startHour) % 2 ? "#ffffff" : "#fbf8ff";
    ctx.fillRect(gridLeft, y, gridRight - gridLeft, hourHeight);
  }
  ctx.strokeStyle = "#e3d6ee";
  ctx.lineWidth = 1.4;
  for (let hour = startHour; hour <= endHour; hour += 1) {
    const y = gridStartY + (hour - startHour) * hourHeight;
    ctx.beginPath();
    ctx.moveTo(gridLeft, y);
    ctx.lineTo(gridRight, y);
    ctx.stroke();
    ctx.fillStyle = "#74647f";
    ctx.font = "800 13px Inter, Arial, sans-serif";
    ctx.fillText(hourToLabel(hour), margin + 16, y + 5);
  }
  for (let i = 0; i <= 7; i += 1) {
    const x = gridLeft + i * colWidth;
    ctx.beginPath();
    ctx.moveTo(x, gridTop);
    ctx.lineTo(x, gridStartY + gridHeight);
    ctx.stroke();
  }

  events.forEach((ev) => {
    const dayIndex = CALENDAR_DAYS.indexOf(ev.dayCode);
    if (dayIndex < 0) return;
    const laneGap = 7;
    const availableWidth = colWidth - 18;
    const laneCount = Math.max(1, ev.laneCount || 1);
    const eventWidth = (availableWidth - laneGap * (laneCount - 1)) / laneCount;
    const x = gridLeft + dayIndex * colWidth + 9 + (ev.lane || 0) * (eventWidth + laneGap);
    const y = gridStartY + Math.max(0, ev.range.start - startHour) * hourHeight + 7;
    const h = Math.max(52, (ev.range.end - ev.range.start) * hourHeight - 14);
    const color = departmentColor(ev.department);
    const gradient = ctx.createLinearGradient(x, y, x + eventWidth, y + h);
    gradient.addColorStop(0, shiftHexColor(color, 18));
    gradient.addColorStop(1, color);
    roundRectCanvas(ctx, x, y, eventWidth, h, 12, gradient);
    ctx.fillStyle = "rgba(255,255,255,0.28)";
    ctx.fillRect(x + 12, y + 11, Math.max(0, Math.min(48, eventWidth - 24)), 4);
    ctx.fillStyle = "#ffffff";
    ctx.font = `${eventWidth < 120 ? "800 13px" : "900 16px"} Inter, Arial, sans-serif`;
    drawCanvasText(ctx, ev.code || "-", x + 12, y + 30, eventWidth - 24);
    ctx.font = `${eventWidth < 120 ? "700 10px" : "800 12px"} Inter, Arial, sans-serif`;
    drawCanvasText(ctx, displayTime(ev.time), x + 12, y + 50, eventWidth - 24);
    if (h > 76) {
      ctx.font = `${eventWidth < 120 ? "600 9px" : "700 11px"} Inter, Arial, sans-serif`;
      drawCanvasText(ctx, `${ev.section || "-"} | ${ev.room || "No room listed"}`, x + 12, y + 70, eventWidth - 24);
    }
    if (h > 98) {
      ctx.font = "600 10px Inter, Arial, sans-serif";
      drawCanvasText(ctx, ev.faculty || "-", x + 12, y + 90, eventWidth - 24);
    }
  });

  ctx.fillStyle = "#756482";
  ctx.font = "700 13px Inter, Arial, sans-serif";
  ctx.fillText("Generated by COSFinder", margin + 28, height - 34);

  canvas.toBlob((blob) => {
    if (!blob) return;
    downloadBlob(blob, fileStem(format === "jpg" ? "jpg" : "png", "calendar"));
    showToast(`Calendar-format ${format.toUpperCase()} schedule saved.`);
  }, format === "jpg" ? "image/jpeg" : "image/png", 0.94);
}

function roundRectCanvas(ctx, x, y, width, height, radius, fill) {
  const safeRadius = Math.max(0, Math.min(radius, width / 2, height / 2));
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.moveTo(x + safeRadius, y);
  ctx.lineTo(x + width - safeRadius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  ctx.lineTo(x + width, y + height - safeRadius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  ctx.lineTo(x + safeRadius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  ctx.lineTo(x, y + safeRadius);
  ctx.quadraticCurveTo(x, y, x + safeRadius, y);
  ctx.fill();
}

function exportPdf(layout = "list") {
  if (layout === "calendar") {
    const pdf = makeCalendarPdf();
    downloadBlob(new Blob([pdf], { type: "application/pdf" }), fileStem("pdf", layout));
    showToast("Calendar-format PDF schedule saved.");
    return;
  }
  const rows = exportRows();
  const lines = [
    scheduleTitle(),
    `COSFinder - Student ID ${state.studentId || "-"}`,
    `Generated ${new Date().toLocaleString()}`,
    "",
    "Day | Time | Code | Section | Room | Mode | Faculty",
    ...rows.map(row => `${row.day} | ${row.time} | ${row.code} | ${row.section} | ${row.room} | ${row.mode} | ${row.faculty}`),
  ];
  const pdf = makePdf(lines);
  downloadBlob(new Blob([pdf], { type: "application/pdf" }), fileStem("pdf", layout));
  showToast("PDF schedule saved.");
}

function makeCalendarPdf() {
  const events = calendarEventsWithLayout(exportCalendarEvents());
  const { startHour, endHour } = calendarExportBounds(events);
  const { pageWidth, pageHeight, size, orientation } = printPageSettings();
  const margin = 28;
  const headerHeight = 68;
  const gridTop = 128;
  const dayHeaderHeight = 28;
  const gridStart = gridTop + dayHeaderHeight;
  const gridBottom = pageHeight - 38;
  const gridHeight = gridBottom - gridStart;
  const gridLeft = 86;
  const gridRight = pageWidth - margin;
  const colWidth = (gridRight - gridLeft) / 7;
  const hourHeight = gridHeight / Math.max(1, endHour - startHour);
  const ops = [];
  const escapePdf = (text) => String(text || "").replace(/[\\()]/g, "\\$&");
  const rgb = (hex) => {
    const color = hexToRgb(hex);
    return `${(color.r / 255).toFixed(3)} ${(color.g / 255).toFixed(3)} ${(color.b / 255).toFixed(3)}`;
  };
  const rect = (x, yTop, w, h, fill, stroke) => {
    if (fill) ops.push(`${rgb(fill)} rg`);
    if (stroke) ops.push(`${rgb(stroke)} RG 0.7 w`);
    const op = fill && stroke ? "B" : fill ? "f" : "S";
    ops.push(`${x.toFixed(1)} ${(pageHeight - yTop - h).toFixed(1)} ${w.toFixed(1)} ${h.toFixed(1)} re ${op}`);
  };
  const text = (value, x, yTop, size, fill = "#21162c", maxChars = 80) => {
    const output = String(value || "-").slice(0, maxChars);
    ops.push("BT", `${rgb(fill)} rg`, `/F1 ${size} Tf`, `${x.toFixed(1)} ${(pageHeight - yTop).toFixed(1)} Td`, `(${escapePdf(output)}) Tj`, "ET");
  };
  const line = (x1, y1Top, x2, y2Top, stroke = "#e3d6ee", width = 0.7) => {
    ops.push(`${rgb(stroke)} RG ${width} w`, `${x1.toFixed(1)} ${(pageHeight - y1Top).toFixed(1)} m ${x2.toFixed(1)} ${(pageHeight - y2Top).toFixed(1)} l S`);
  };

  rect(0, 0, pageWidth, pageHeight, "#f7f1fc");
  rect(0, 0, pageWidth, headerHeight, "#3f1d62");
  rect(margin, 18, 36, 36, "#7440a8");
  text("CF", margin + 8, 42, 17, "#ffffff", 2);
  text(scheduleTitle(), margin + 48, 30, 22, "#ffffff", orientation === "portrait" ? 34 : 58);
  text(`COSFinder weekly calendar | Student ID ${state.studentId || "-"}`, margin + 48, 52, 9, "#e9dcf5", orientation === "portrait" ? 48 : 70);
  text(`${events.length} blocks | ${size.toUpperCase()} ${orientation} | ${hourToLabel(startHour)}-${hourToLabel(endHour)}`, Math.max(margin + 48, pageWidth - 270), 52, 8, "#e9dcf5", 70);

  rect(margin, 88, pageWidth - margin * 2, pageHeight - 118, "#ffffff", "#dfd0ea");
  text("Weekly Calendar Format", margin + 18, 112, 15, "#3f1d62", 40);
  text("Clean day-by-day view for advising, sharing, and saving multiple schedules.", margin + 190, 112, 8, "#756482", orientation === "portrait" ? 46 : 82);

  rect(gridLeft, gridTop, gridRight - gridLeft, dayHeaderHeight, "#efe5f8", "#d8c7e7");
  CALENDAR_DAYS.forEach((day, index) => {
    const x = gridLeft + index * colWidth;
    text(formatDayLabel(day).toUpperCase(), x + 7, gridTop + 18, 8, "#3f1d62", 12);
  });

  for (let hour = startHour; hour < endHour; hour += 1) {
    const y = gridStart + (hour - startHour) * hourHeight;
    rect(gridLeft, y, gridRight - gridLeft, hourHeight, (hour - startHour) % 2 ? "#ffffff" : "#fbf8ff");
  }
  for (let hour = startHour; hour <= endHour; hour += 1) {
    const y = gridStart + (hour - startHour) * hourHeight;
    line(gridLeft, y, gridRight, y);
    text(hourToLabel(hour), margin + 12, y + 3, 7, "#74647f", 9);
  }
  for (let i = 0; i <= 7; i += 1) {
    const x = gridLeft + i * colWidth;
    line(x, gridTop, x, gridBottom);
  }

  events.forEach((event) => {
    const dayIndex = CALENDAR_DAYS.indexOf(event.dayCode);
    if (dayIndex < 0) return;
    const laneGap = 2.5;
    const laneCount = Math.max(1, event.laneCount || 1);
    const availableWidth = colWidth - 7;
    const eventWidth = (availableWidth - laneGap * (laneCount - 1)) / laneCount;
    const x = gridLeft + dayIndex * colWidth + 3.5 + (event.lane || 0) * (eventWidth + laneGap);
    const y = gridStart + Math.max(0, event.range.start - startHour) * hourHeight + 3;
    const h = Math.max(20, (event.range.end - event.range.start) * hourHeight - 6);
    const fill = departmentColor(event.department);
    rect(x, y, eventWidth, h, fill);
    rect(x, y, eventWidth, 3, shiftHexColor(fill, 42));
    text(event.code || "-", x + 4, y + 12, eventWidth < 42 ? 5.2 : 6.8, "#ffffff", eventWidth < 42 ? 8 : 14);
    text(displayTime(event.time), x + 4, y + 22, eventWidth < 42 ? 4.6 : 5.8, "#ffffff", eventWidth < 42 ? 9 : 18);
    if (h > 34) text(`${event.section || "-"} | ${event.room || "No room listed"}`, x + 4, y + 32, eventWidth < 42 ? 4.2 : 5.4, "#ffffff", eventWidth < 42 ? 10 : 22);
  });
  text("Generated by COSFinder", margin + 18, pageHeight - 16, 7, "#756482", 34);

  const stream = ops.join("\n");
  const objects = [
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj\n",
    `3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj\n`,
    "4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj\n",
    `5 0 obj << /Length ${stream.length} >> stream\n${stream}\nendstream endobj\n`,
  ];
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((obj) => {
    offsets.push(pdf.length);
    pdf += obj;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return pdf;
}

function calendarPdfLines() {
  const groups = groupedCalendarEvents();
  const lines = [
    scheduleTitle(),
    `COSFinder - Student ID ${state.studentId || "-"}`,
    `Calendar format - Generated ${new Date().toLocaleString()}`,
    "",
  ];
  CALENDAR_DAYS.forEach((day) => {
    lines.push(formatDayLabel(day).toUpperCase());
    if (!groups[day].length) lines.push("  No classes");
    groups[day].forEach((ev) => {
      lines.push(`  ${displayTime(ev.time)} | ${ev.code || "-"} ${ev.section || "-"} | ${ev.room || "No room listed"} | ${ev.faculty || "-"}`);
    });
    lines.push("");
  });
  return lines;
}

function makePdf(lines) {
  const escapePdf = (text) => String(text).replace(/[\\()]/g, "\\$&");
  const { pageWidth, pageHeight } = printPageSettings();
  const content = ["BT", "/F1 18 Tf", `56 ${pageHeight - 50} Td`, `(${escapePdf(lines[0])}) Tj`, "/F1 10 Tf", "0 -22 Td"];
  lines.slice(1, 42).forEach((line) => {
    content.push(`(${escapePdf(line.slice(0, 112))}) Tj`, "0 -15 Td");
  });
  content.push("ET");
  const stream = content.join("\n");
  const objects = [
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj\n",
    `3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj\n`,
    "4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj\n",
    `5 0 obj << /Length ${stream.length} >> stream\n${stream}\nendstream endobj\n`,
  ];
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((obj) => {
    offsets.push(pdf.length);
    pdf += obj;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return pdf;
}

function renderStats() {
  const courses = state.courses;
  const departments = new Set(courses.map(course => course.department).filter(Boolean));
  const hybrid = courses.filter(course => String(course.mode).toUpperCase().includes("HYBRID")).length;
  const online = courses.filter(course => String(course.room).toUpperCase().includes("ONLINE") || String(course.mode).toUpperCase().includes("FOL") || String(course.mode).toUpperCase().includes("POL")).length;
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value.toLocaleString();
  };

  setText("statCourses", courses.length);
  setText("statDepartments", departments.size);
  setText("statHybrid", hybrid);
  setText("statOnline", online);
  if (els.dataSourceBadge) els.dataSourceBadge.textContent = "Data source: College of Science offerings";
  if (els.lastUpdatedBadge) els.lastUpdatedBadge.textContent = "Local copy updated Apr 28, 2026";
}

function initSoundToggle() {
  const button = document.getElementById("soundToggle");
  if (!button) return;
  button.setAttribute("aria-pressed", String(soundState.enabled));
  button.addEventListener("click", () => {
    soundState.enabled = !soundState.enabled;
    localStorage.setItem("cosfinder-sound", JSON.stringify(soundState.enabled));
    button.setAttribute("aria-pressed", String(soundState.enabled));
    playSound("tap");
  });
}

renderStats();
initSoundToggle();
