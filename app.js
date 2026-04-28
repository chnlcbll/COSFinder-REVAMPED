const EMBEDDED_COURSES = [{"department": "PHYSICS", "code": "COMPY02", "section": "N30", "faculty": "Dr. Jude Antenorcruz", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "C314", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "COMPY03", "section": "N30", "faculty": "Dr. Joaquin Moreno", "day": "MH", "days": ["MON", "THU"], "time": "11:00-12:30", "room": "C314", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "CLAME01", "section": "N41", "faculty": "Dr. Maria Carla Manzano", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "M305", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "ELECP01", "section": "N03", "faculty": "Dr. Wilfred Espulgar", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "J307", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "ELECP01", "section": "N04", "faculty": "Dr. Emmanuel Rodulfo", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "J307", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "HLTHP01", "section": "N01", "faculty": "Ramon Cruzpero", "day": "TF", "days": ["TUE", "FRI"], "time": "18:00-19:30", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "PHYSB03", "section": "N01A", "faculty": "Dr. Chris Que", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "J307", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "PHYSB03", "section": "N02A", "faculty": "Lester Bernardino", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "J307", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "PHYSC03", "section": "M01", "faculty": "Dr. Ofelia Rempillo", "day": "MH", "days": ["MON", "THU"], "time": "11:00-12:30", "room": "J307", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "PHYS00D", "section": "N40", "faculty": "Dr. Jeric Garrido", "day": "FRIDAY", "days": ["FRI"], "time": "14:30-15:30", "room": "M305", "enrollCap": "", "mode": "F2F", "restricted": false}, {"department": "PHYSICS", "code": "PHYS003", "section": "N32", "faculty": "Dr. Edwin Lombridas", "day": "THURSDAY", "days": ["THU"], "time": "12:45-13:45", "room": "Y609", "enrollCap": "30", "mode": "F2F", "restricted": false}, {"department": "PHYSICS", "code": "PHYMT01", "section": "N40", "faculty": "Russel Ong", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "M304", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "PHYSICS", "code": "MTSCI02", "section": "N30", "faculty": "Dr. Eugene Ragasa", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "L309", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "MTSCI04", "section": "N33", "faculty": "Dr. Joaquin Moreno", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "Y305", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "PHOTO01", "section": "N40", "faculty": "Dr. Christopher Que", "day": "MH", "days": ["MON", "THU"], "time": "16:15-17:45", "room": "J303", "enrollCap": "40", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "RDBIO1", "section": "N40", "faculty": "Dr. Jowi Cruz", "day": "MH", "days": ["MON", "THU"], "time": "18:00-19:30", "room": "V207", "enrollCap": "40", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "RDBIO1", "section": "N41", "faculty": "Dr. Jowi Cruz", "day": "MH", "days": ["MON", "THU"], "time": "18:00-19:30", "room": "V207", "enrollCap": "40", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "SENSR01", "section": "N40", "faculty": "Dr. Wilfred Espulgar", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "V306", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "SOLST01", "section": "N31", "faculty": "Dr. Eugene Ragasa", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "Y305", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "QUAME01", "section": "N31", "faculty": "Dr. Edwin Lombridas", "day": "MH", "days": ["MON", "THU"], "time": "11:00-12:30", "room": "Y609", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "LBYP03C", "section": "N25A", "faculty": "Jejomar Bulan", "day": "WEDNESDAY", "days": ["WED"], "time": "09:30-12:30", "room": "J403", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYP03C", "section": "M25B", "faculty": "Kyle Alfred Paz", "day": "WEDNESDAY", "days": ["WED"], "time": "09:30-12:30", "room": "J405", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYP03B", "section": "N25A", "faculty": "Russel Ong", "day": "THURSDAY", "days": ["THU"], "time": "09:30-12:30", "room": "J302", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYP03B", "section": "N25B", "faculty": "Jejomar Bulan", "day": "THURSDAY", "days": ["THU"], "time": "09:30-12:30", "room": "J403", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYP03B", "section": "N26A", "faculty": "Dr. Jeric Garrido", "day": "FRIDAY", "days": ["FRI"], "time": "09:30-12:30", "room": "J403", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYP03B", "section": "N26B", "faculty": "Russel Ong", "day": "FRIDAY", "days": ["FRI"], "time": "09:30-12:30", "room": "J302", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYPH01", "section": "N25A", "faculty": "Raiseth Fajardo", "day": "THURSDAY", "days": ["THU"], "time": "09:30-12:30", "room": "J413", "enrollCap": "24", "mode": "", "restricted": false}, {"department": "PHYSICS", "code": "LBBPH05", "section": "N25A", "faculty": "Dr. Maria Carla Manzano", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "J413", "enrollCap": "25", "mode": "HYBRID", "restricted": false}, {"department": "PHYSICS", "code": "LBYPH08", "section": "N25A", "faculty": "Dr. Christopher Que", "day": "FRIDAY", "days": ["FRI"], "time": "11:00-14:00", "room": "J403", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYPH0S", "section": "N25A", "faculty": "Dr. Wilfred Espulgar", "day": "THURSDAY", "days": ["THU"], "time": "14:30-17:30", "room": "J406", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYPH0C", "section": "N25A", "faculty": "Floro Roque", "day": "THURSDAY", "days": ["THU"], "time": "09:30-12:30", "room": "J405", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYPH0C", "section": "N25B", "faculty": "Dr. James Olarve", "day": "THURSDAY", "days": ["THU"], "time": "09:30-12:30", "room": "J411", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYPH0C", "section": "N26A", "faculty": "Floro Roque", "day": "FRIDAY", "days": ["FRI"], "time": "09:30-12:30", "room": "J405", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "LBYPH0C", "section": "N26B", "faculty": "Dr. James Olarve", "day": "FRIDAY", "days": ["FRI"], "time": "09:30-12:30", "room": "J411", "enrollCap": "25", "mode": "PIP", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N17", "faculty": "Edgar Vallar", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-20:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N54", "faculty": "Jowi Tsikednu Cruz", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-20:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N55", "faculty": "Melsa Rose Ducut", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-20:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N52", "faculty": "Wilfred Espulgar", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-20:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N19", "faculty": "Romeric Pobre", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-20:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N51", "faculty": "Ofelia Rempillo", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-20:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N20", "faculty": "Maria Carla Manzano", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-19:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N11", "faculty": "Gil Nonato Santos", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-19:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP01", "section": "N53", "faculty": "Jude Antenorcruz", "day": "SATURDAY", "days": ["SAT"], "time": "18:00-19:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP02", "section": "N52", "faculty": "Wilfred Espulgar", "day": "SATURDAY", "days": ["SAT"], "time": "19:00-20:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "PHYSICS", "code": "RESAP02", "section": "N20", "faculty": "Maria Carla Manzano", "day": "SATURDAY", "days": ["SAT"], "time": "19:00-20:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP02", "section": "N53", "faculty": "Jude Antenorcruz", "day": "SATURDAY", "days": ["SAT"], "time": "19:00-20:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP03", "section": "N20", "faculty": "Maria Carla Manzano", "day": "SATURDAY", "days": ["SAT"], "time": "20:15-22:15", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "RESAP03", "section": "N53", "faculty": "Jude Antenorcruz", "day": "SATURDAY", "days": ["SAT"], "time": "20:15-22:15", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "PYSEM01", "section": "N19", "faculty": "Romeric Pobre", "day": "SUNDAY", "days": ["SUN"], "time": "09:00-09:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "PYSEM01", "section": "N20", "faculty": "Maria Carla Manzano", "day": "SUNDAY", "days": ["SUN"], "time": "09:00-09:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "PYSEM01", "section": "N53", "faculty": "Jude Antenorcruz", "day": "SUNDAY", "days": ["SUN"], "time": "09:00-09:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY01", "section": "N19", "faculty": "Romeric Pobre", "day": "SUNDAY", "days": ["SUN"], "time": "10:00-10:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY01", "section": "N52", "faculty": "Wilfred Espulgar", "day": "SUNDAY", "days": ["SUN"], "time": "10:00-10:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY01", "section": "N20", "faculty": "Maria Carla Manzano", "day": "SUNDAY", "days": ["SUN"], "time": "10:00-10:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY01", "section": "N11", "faculty": "Gil Nonato Santos", "day": "SUNDAY", "days": ["SUN"], "time": "10:00-10:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY01", "section": "N16", "faculty": "Michelle Natividad", "day": "SUNDAY", "days": ["SUN"], "time": "10:00-10:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY01", "section": "N02", "faculty": "Al Rey Villagracia", "day": "SUNDAY", "days": ["SUN"], "time": "10:00-10:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY01", "section": "N55", "faculty": "Melsa Rose Ducut", "day": "SUNDAY", "days": ["SUN"], "time": "10:00-10:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY01", "section": "N53", "faculty": "Jude Antenorcruz", "day": "SUNDAY", "days": ["SUN"], "time": "10:00-10:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY02", "section": "N20", "faculty": "Maria Carla Manzano", "day": "SUNDAY", "days": ["SUN"], "time": "11:00-11:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY02", "section": "N11", "faculty": "Gil Nonato Santos", "day": "SUNDAY", "days": ["SUN"], "time": "11:00-11:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY02", "section": "N53", "faculty": "Jude Antenorcruz", "day": "SUNDAY", "days": ["SUN"], "time": "11:00-11:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY03", "section": "N15", "faculty": "Maria Cecilia Galvez", "day": "SUNDAY", "days": ["SUN"], "time": "12:00-12:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY03", "section": "N20", "faculty": "Maria Carla Manzano", "day": "SUNDAY", "days": ["SUN"], "time": "12:00-12:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY03", "section": "N11", "faculty": "Gil Nonato Santos", "day": "SUNDAY", "days": ["SUN"], "time": "12:00-12:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY03", "section": "N16", "faculty": "Michelle Natividad", "day": "SUNDAY", "days": ["SUN"], "time": "12:00-12:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY03", "section": "N02", "faculty": "Al Rey Villagracia", "day": "SUNDAY", "days": ["SUN"], "time": "12:00-12:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "THSPY03", "section": "N53", "faculty": "Jude Antenorcruz", "day": "SUNDAY", "days": ["SUN"], "time": "12:00-12:30", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "PRCPHYS", "section": "N80", "faculty": "Maria Cecilia Galvez", "day": "SUNDAY", "days": ["SUN"], "time": "14:30-16:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "PRCPHYS", "section": "N70", "faculty": "Maria Carla Manzano", "day": "SUNDAY", "days": ["SUN"], "time": "14:30-16:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "PRCPHYS", "section": "N94", "faculty": "Jude Antenorcruz", "day": "SUNDAY", "days": ["SUN"], "time": "14:30-16:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "PHYSICS", "code": "PRCPHYS", "section": "N89", "faculty": "Gil Nonato Santos", "day": "SUNDAY", "days": ["SUN"], "time": "14:30-16:00", "room": "", "enrollCap": "", "mode": "NCW", "restricted": false}, {"department": "MATH & STATS", "code": "MTH122A", "section": "N45", "faculty": "TAN, SONIA Y.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "M304", "enrollCap": "45", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH132A", "section": "N40", "faculty": "CARPIO, KRISTINE JOY E.", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "J303", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH131A", "section": "N40", "faculty": "CONCEPCION, EDWARD ROY", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH202A", "section": "N40", "faculty": "GARCIA, MARK ANTHONY A.", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "14:30-15:30", "room": "M304", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH202A", "section": "N41", "faculty": "GARCIA, MARK ANTHONY A.", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "11:00-12:00", "room": "M304", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH210A", "section": "N40", "faculty": "MORALES, JOHN VINCENT S.", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "09:15-10:45", "room": "J303", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH220A", "section": "M40", "faculty": "SAY-AWEN, APRIL LYNNE", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "09:15-10:45", "room": "M304", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH224A", "section": "N41", "faculty": "CAMPENA, FRANCIS JOSEPH H.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "M305", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH225A", "section": "N40", "faculty": "GERVACIO, SEVERINO V.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "ONLINE", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH242A", "section": "N30", "faculty": "LAO, ANGELYN R.", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "11:00-12:30", "room": "L309", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH243A", "section": "N29", "faculty": "FORTUN, NOEL T.", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "Y609", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH245A", "section": "N25", "faculty": "REYES, JOSE TRISTAN F.", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "09:15-10:45", "room": "Y609", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH253A", "section": "N32", "faculty": "GARCIA, MARK ANTHONY A.", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "16:15-17:45", "room": "G404A", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH254A", "section": "N27", "faculty": "NOCON, EDERLINA G.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "Y609", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH258A", "section": "N42", "faculty": "COLLADO, KARL MAN S.", "day": "MT", "days": ["MON", "TUE"], "time": "14:30-16:00", "room": "M315", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT163A", "section": "N30", "faculty": "MOJICA, VIO JIANU C.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-09:00", "room": "G404A", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT203A", "section": "N31", "faculty": "OCAMPO, SHIRLEE S.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "G404A", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT224A", "section": "N41", "faculty": "BONZO, DANIEL ISIDORE BRIAN", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "07:30-09:00", "room": "ONLINE", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT241A", "section": "N30", "faculty": "MOJICA, VIO JIANU C.", "day": "WS", "days": ["WED", "SAT"], "time": "09:15-11:15", "room": "G404A", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT265A", "section": "N30", "faculty": "CO, FRUMENCIO F.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "C314", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT304A", "section": "N40", "faculty": "TRESVALLES, REGINA M.", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "14:30-16:00", "room": "M305", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT304A", "section": "N41", "faculty": "TRESVALLES, REGINA M.", "day": "MH, TF", "days": ["MON", "THU", "TUE", "FRI"], "time": "12:45-14:15", "room": "M305", "enrollCap": "40", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT321A", "section": "N31", "faculty": "CO, FRUMENCIO F.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "C314", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT151A", "section": "N30", "faculty": "CO, FRUMENCIO F.", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "G404A", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT151A", "section": "N31", "faculty": "CO, FRUMENCIO F.", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "C314", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT151A", "section": "N32", "faculty": "ALBERTO, ANGELO M.", "day": "TF", "days": ["TUE", "FRI"], "time": "16:15-17:45", "room": "C314", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT151A", "section": "N33", "faculty": "CO, FRUMENCIO F.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-12:30", "room": "C314", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT151A", "section": "N34", "faculty": "OCAMPO, SHIRLEE S.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "G404A", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT151A", "section": "N35", "faculty": "LEONG, ROBERT NEIL F.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "C314", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT151A", "section": "N36", "faculty": "LEONG, ROBERT NEIL F.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "G404A", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH121A", "section": "N40", "faculty": "CARPIO, KRISTINE JOY E.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "M305", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH123A", "section": "N40", "faculty": "MENGORIO, JOSHUA R.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "M306", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH124A", "section": "N40", "faculty": "DE LARA, MARK LEXTER", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "M315", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH101A", "section": "N01", "faculty": "CONCEPCION, EDWARD ROY", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:15", "room": "ONLINE", "enrollCap": "45", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH201A", "section": "N40", "faculty": "CONCEPCION, EDWARD ROY", "day": "MH", "days": ["MON", "THU"], "time": "11:00-12:00", "room": "ONLINE", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "STT222A", "section": "N40", "faculty": "COLLADO, KARL MAN S.", "day": "MH", "days": ["MON", "THU"], "time": "16:15-17:45", "room": "J303", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "MTH300A", "section": "N25", "faculty": "SABANGAN, ALELIE", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "", "enrollCap": "30", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT1", "section": "N01", "faculty": "CO, FRUMENCIO F.", "day": "TF", "days": ["TUE", "FRI"], "time": "16:15-17:45", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT2", "section": "N01", "faculty": "CO, FRUMENCIO F.", "day": "SATURDAY", "days": ["SAT"], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT2", "section": "N09", "faculty": "OCAMPO, SHIRLEE S.", "day": "SATURDAY", "days": ["SAT"], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT2", "section": "N17", "faculty": "LEONG, ROBERT NEIL F.", "day": "SATURDAY", "days": ["SAT"], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT2", "section": "N22", "faculty": "TRESVALLES, REGINA M.", "day": "SATURDAY", "days": ["SAT"], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT2", "section": "N42", "faculty": "BONZO, DANIEL ISIDORE BRIAN", "day": "SATURDAY", "days": ["SAT"], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT2", "section": "N43", "faculty": "NACION, NELDA A.", "day": "SATURDAY", "days": ["SAT"], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT2", "section": "N26", "faculty": "ARCILLA, RECHEL G.", "day": "SATURDAY", "days": ["SAT"], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "THSSTT2", "section": "N12", "faculty": "ALBERTO, ANGELO M.", "day": "SATURDAY", "days": ["SAT"], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "PRCSTAT", "section": "N71", "faculty": "CO, FRUMENCIO F.", "day": "SUNDAY", "days": ["SUN"], "time": "08:00-10:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "PRCSTAT", "section": "N80", "faculty": "OCAMPO, SHIRLEE S.", "day": "", "days": [], "time": "08:00-10:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "PRCSTAT", "section": "N92", "faculty": "LEONG, ROBERT NEIL F.", "day": "SUNDAY", "days": ["SUN"], "time": "08:00-10:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "PRCSTAT", "section": "N90", "faculty": "TRESVALLES, REGINA M.", "day": "SUNDAY", "days": ["SUN"], "time": "08:00-10:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "PRCSTAT", "section": "N52", "faculty": "BONZO, DANIEL ISIDORE BRIAN", "day": "SUNDAY", "days": ["SUN"], "time": "08:00-10:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "PRCSTAT", "section": "N82", "faculty": "NACION, NELDA A.", "day": "SUNDAY", "days": ["SUN"], "time": "08:00-10:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "PRCSTAT", "section": "N93", "faculty": "ARCILLA, RECHEL G.", "day": "SUNDAY", "days": ["SUN"], "time": "08:00-10:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "MATH & STATS", "code": "PRCSTAT", "section": "N97", "faculty": "ALBERTO, ANGELO M.", "day": "SUNDAY", "days": ["SUN"], "time": "08:00-10:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "BIOKMBI", "section": "N01A", "faculty": "Lazaro-Llanos, Nancy", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "BIOKMAN", "section": "N01A", "faculty": "Robles, Julita Climaco", "day": "TF", "days": ["TUE", "FRI"], "time": "16:15-17:15", "room": "J111", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "BIOKMAN", "section": "N02A", "faculty": "Robles, Julita Climaco", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-13:45", "room": "J111", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "BIOKMOR", "section": "N01", "faculty": "David Penaloza", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:00", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "BIOKMOR", "section": "N02", "faculty": "David Penaloza", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-15:30", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "BIOKMOR", "section": "N03", "faculty": "Lagua, Faith Marie G.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-15:30", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "BIOKMOR", "section": "N04", "faculty": "David Penaloza", "day": "TF", "days": ["TUE", "FRI"], "time": "16:15-17:15", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "KEMBIO2", "section": "N40", "faculty": "Lazaro-Llanos, Nancy", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "M306", "enrollCap": "30", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMORG1", "section": "N32", "faculty": "Lagua, Faith Marie G.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-09:00", "room": "Y305", "enrollCap": "", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMORG3", "section": "M01", "faculty": "Ebajo, Virgilio Jr. Dizon", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "J111", "enrollCap": "45", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMELE2", "section": "N30", "faculty": "Ng, Carlo Antonio T.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "L309", "enrollCap": "20", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMFEL2", "section": "N31", "faculty": "Ng, Carlo Antonio T.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "L309", "enrollCap": "20", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMBIC1", "section": "N02", "faculty": "Lazaro-Llanos, Nancy", "day": "MH", "days": ["MON", "THU"], "time": "07:30-09:00", "room": "J307", "enrollCap": "45", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMBEL1", "section": "N02", "faculty": "Lazaro-Llanos, Nancy", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "KEMINO1", "section": "N31", "faculty": "Garcia, Joel E.", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "Y305", "enrollCap": "", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMINO2", "section": "N30", "faculty": "Garcia, Joel E.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-09:00", "room": "Y308", "enrollCap": "30", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMINDS", "section": "N31", "faculty": "Punzalan, Eric R.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "A711", "enrollCap": "30", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMPHY1", "section": "N32", "faculty": "Macalino, Stephani Joy Yarcia", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "L309", "enrollCap": "30", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMPYS2", "section": "N01", "faculty": "Macalino, Stephani Joy Yarcia", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "J111", "enrollCap": "45", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KEMBGEN", "section": "N02", "faculty": "Sumayao, Rodolfo Jr. E.", "day": "MH", "days": ["MON", "THU"], "time": "16:15-17:45", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "KEMESS1", "section": "N40", "faculty": "Duay, Searle Aichelle Santos", "day": "FRIDAY", "days": ["FRI"], "time": "16:15-17:15", "room": "", "enrollCap": "40", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "KEMZEL2", "section": "N31", "faculty": "Ng, Carlo Antonio T.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "L309", "enrollCap": "30", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KMPHOR1", "section": "N01", "faculty": "Punzalan, Eric R.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "KEMANL1", "section": "M01", "faculty": "Robles, Julita Climaco", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "J111", "enrollCap": "45", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KMANALP", "section": "N01", "faculty": "Robles, Julita Climaco", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "J111", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "KMANALP", "section": "N02", "faculty": "Robles, Julita Climaco", "day": "MH", "days": ["MON", "THU"], "time": "16:15-17:45", "room": "J111", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "LBYKM21", "section": "M25A", "faculty": "Duay, Searle Aichelle Santos", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "J305", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYKM31", "section": "N25A", "faculty": "Lagua, Faith Marie G.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "J507", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYKM41", "section": "N26A", "faculty": "Duay, Searle Aichelle Santos", "day": "FRIDAY", "days": ["FRI"], "time": "07:30-10:30", "room": "J305", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYKM41", "section": "N26B", "faculty": "Duay, Searle Aichelle Santos", "day": "FRIDAY", "days": ["FRI"], "time": "11:00-14:00", "room": "J305", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYKM43", "section": "N25A", "faculty": "Sumayao, Rodolfo Jr. E.", "day": "THURSDAY", "days": ["THU"], "time": "11:00-14:00", "room": "J304", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYKM43", "section": "N25B", "faculty": "Sumayao, Rodolfo Jr. E.", "day": "FRIDAY", "days": ["FRI"], "time": "11:00-14:00", "room": "J304", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYKM51", "section": "N26A", "faculty": "Ng, Carlo Antonio T.", "day": "WEDNESDAY", "days": ["WED"], "time": "07:30-10:30", "room": "J312", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYKM51", "section": "N26B", "faculty": "Ng, Carlo Antonio T.", "day": "WEDNESDAY", "days": ["WED"], "time": "11:00-14:00", "room": "J312", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYKM52", "section": "N25A", "faculty": "Bantang, Jose Paolo O.", "day": "THURSDAY", "days": ["THU"], "time": "07:30-10:30", "room": "J506", "enrollCap": "24", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "LBYANAP", "section": "N25A", "faculty": "Calingacion, Mariafe N.", "day": "THURSDAY", "days": ["THU"], "time": "07:30-10:30", "room": "J306", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYANAP", "section": "N25B", "faculty": "De La Rosa, Francis", "day": "FRIDAY", "days": ["FRI"], "time": "07:30-10:30", "room": "J306", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYANAP", "section": "N26A", "faculty": "Macalino, Stephani Joy Yarcia", "day": "FRIDAY", "days": ["FRI"], "time": "11:00-14:00", "room": "J306", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYANAP", "section": "N26B", "faculty": "De La Rosa, Francis", "day": "FRIDAY", "days": ["FRI"], "time": "14:30-17:30", "room": "J306", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBBBIBI", "section": "N26A", "faculty": "Sumayao, Rodolfo Jr. E.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "J305", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "CHEM", "code": "LBYBIAN", "section": "N25A", "faculty": "Sagayap, Charmaine", "day": "TUESDAY", "days": ["TUE"], "time": "07:30-10:30", "room": "J306", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIAN", "section": "N25B", "faculty": "Macalino, Stephani Joy Yarcia", "day": "TUESDAY", "days": ["TUE"], "time": "11:00-14:00", "room": "J312", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIAN", "section": "N26A", "faculty": "Macalino, Stephani Joy Yarcia", "day": "THURSDAY", "days": ["THU"], "time": "14:30-17:30", "room": "J305", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIAN", "section": "N26B", "faculty": "Calingacion, Mariafe N.", "day": "THURSDAY", "days": ["THU"], "time": "14:30-17:30", "room": "J312", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIOR", "section": "N25A", "faculty": "Sumayao, Rodolfo Jr. E.", "day": "THURSDAY", "days": ["THU"], "time": "07:30-10:30", "room": "J507", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIOR", "section": "N25B", "faculty": "Miranda, Kevin Jace S.", "day": "WEDNESDAY", "days": ["WED"], "time": "11:00-14:00", "room": "J507", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIOR", "section": "N26A", "faculty": "De La Rosa, Francis", "day": "THURSDAY", "days": ["THU"], "time": "14:30-17:30", "room": "J506", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIOR", "section": "N26B", "faculty": "Cybele Santos", "day": "FRIDAY", "days": ["FRI"], "time": "07:30-10:30", "room": "J507", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIOR", "section": "N27A", "faculty": "Go, Johnalyn Cabarles", "day": "TUESDAY", "days": ["TUE"], "time": "11:00-14:00", "room": "J507", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIOR", "section": "N27B", "faculty": "Cybele Santos", "day": "FRIDAY", "days": ["FRI"], "time": "14:30-17:30", "room": "J507", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYBIOR", "section": "N28A", "faculty": "Cybele Santos", "day": "WEDNESDAY", "days": ["WED"], "time": "07:30-10:30", "room": "J507", "enrollCap": "24", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "", "faculty": "", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "KOFISCI", "section": "N25A", "faculty": "Garcia, Emmanuel Vicencio", "day": "TUESDAY", "days": ["TUE"], "time": "11:00-14:00", "room": "C304", "enrollCap": "20", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "KOFISCI", "section": "", "faculty": "Garcia, Emmanuel Vicencio", "day": "WEDNESDAY", "days": ["WED"], "time": "11:00-14:00", "room": "C304", "enrollCap": "20", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N52", "faculty": "Cayme, Jan-Michael C.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N34", "faculty": "Lagua, Faith Marie G.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N58", "faculty": "Duay, Searle Aichelle Santos", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N55", "faculty": "Calingacion, Mariafe N.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N43", "faculty": "Alba, Laurenzo D. V.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N37", "faculty": "Malabed, Raymond S.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N41", "faculty": "Espiritu, Rafael Atilo", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N05", "faculty": "Punzalan, Eric R.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYA", "section": "N27", "faculty": "Garcia, Emmanuel V.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYC", "section": "N53", "faculty": "Garcia, Joel E.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYC", "section": "N57", "faculty": "Bonto, Aldrin P.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSCHYC", "section": "N43", "faculty": "Alba, Laurenzo D. V.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSFSCC", "section": "N57", "faculty": "Bonto, Aldrin P.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N34", "faculty": "Lagua, Faith Marie G.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N55", "faculty": "Calingacion, Mariafe N.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N27", "faculty": "Garcia, Emmanuel V", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N39", "faculty": "Ng, Carlo Antonio T.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N61", "faculty": "Bantang, Jose Paolo O.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N39", "faculty": "Ng, Carlo Antonio T.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N37", "faculty": "Malabed, Raymond S.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N47", "faculty": "Sumayao, Rodolfo Jr. E", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N41", "faculty": "Espiritu, Rafael A", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N46", "faculty": "Penaloza, David Jr. P", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N58", "faculty": "Duay, Searle Aichelle Santos", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N18", "faculty": "Guidote, Lourdes Pangan", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMA", "section": "N52", "faculty": "Cayme, Jan-Michael C.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMB", "section": "N27", "faculty": "Garcia, Emmanuel V.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMB", "section": "N56", "faculty": "Macalino, Stephani Joy Y.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMC", "section": "N65", "faculty": "Tan, Glenn Kelly U.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "THSBCMC", "section": "N37", "faculty": "Malabed, Raymond S.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "PRCBCHM", "section": "N88", "faculty": "Espiritu, Rafael A.", "day": "", "days": [], "time": "18:00-19:30", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "PRCBCHM", "section": "N56", "faculty": "Macalino, Stephani Joy Y.", "day": "", "days": [], "time": "18:00-19:30", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "PRCBCHM", "section": "N95", "faculty": "Malabed, Raymond S.", "day": "", "days": [], "time": "20:15-22:15", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "PRCBCHM", "section": "N93", "faculty": "De La Rosa, Francis", "day": "", "days": [], "time": "20:00-21:00", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "PRCCHEM", "section": "N90", "faculty": "Alba, Laurenzo D. V.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "PRCCHEM", "section": "N59", "faculty": "Bonto, Aldrin P.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "PRCFSCI", "section": "N59", "faculty": "Bonto, Aldrin P.", "day": "", "days": [], "time": "", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "CHEM", "code": "KEMORG2", "section": "N40", "faculty": "Glenn Tan", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "M315", "enrollCap": "", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYKM32", "section": "N25A", "faculty": "Glenn Tan", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "J507", "enrollCap": "", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "KEMESS3", "section": "N30", "faculty": "Calingacion, Mariafe N.", "day": "THURSDAY", "days": ["THU"], "time": "16:15-17:15", "room": "Y305", "enrollCap": "", "mode": "F2F", "restricted": false}, {"department": "CHEM", "code": "KEMPRN2", "section": "N01", "faculty": "Espiritu, Rafael Atilo", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "J109", "enrollCap": "", "mode": "PIP", "restricted": false}, {"department": "CHEM", "code": "LBYKM12", "section": "N01", "faculty": "Ng, Vincent Antonio", "day": "WEDNESDAY", "days": ["WED"], "time": "11:00-14:00", "room": "J306", "enrollCap": "", "mode": "F2F", "restricted": false}, {"department": "BIOLOGY", "code": "ANIPREC", "section": "N40A", "faculty": "Arellano, Bridget C.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "M314", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "BIMEDIC", "section": "N01", "faculty": "Cruz, Jowi Tsidkenu P.", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "A1103", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "BIMEDIC", "section": "N02", "faculty": "Cruz, Jowi Tsidkenu P.", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "A1103", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "BIMEDIC", "section": "N03", "faculty": "Cruz, Jowi Tsidkenu P.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "Y407", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "BIMEDIC", "section": "N04", "faculty": "Cruz, Jowi Tsidkenu P.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "Y408", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "BIMEDIC", "section": "N05", "faculty": "Cruz, Jowi Tsidkenu P.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "Y409", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N01", "faculty": "Cabrera, Esperanza C.", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "Y407", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N02", "faculty": "Delos Reyes, Mariquit M.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "Y407", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N03", "faculty": "Delos Reyes, Mariquit M.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "Y408", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N04", "faculty": "Delos Reyes, Mariquit M.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "Y409", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N05", "faculty": "Salvador, Paul Benedic U.", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "V207", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N06", "faculty": "Salvador, Paul Benedic U.", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "V207", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N07", "faculty": "Cabrera, Esperanza C.", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "Y408", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N08", "faculty": "Cabrera, Esperanza C.", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "Y409", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N09", "faculty": "Salvador, Paul Benedic U.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "Y507", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N10", "faculty": "Salvador, Paul Benedic U.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "Y508", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N11", "faculty": "Salvador, Paul Benedic U.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "Y509", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "CELLMOL", "section": "N12", "faculty": "Delos Reyes, Mariquit M.", "day": "MH", "days": ["MON", "THU"], "time": "09:15-10:45", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "EPIDEMI", "section": "N40", "faculty": "Simando III, Amador F.", "day": "MH", "days": ["MON", "THU"], "time": "16:15-17:45", "room": "A1103", "enrollCap": "40", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "EPIDEMI", "section": "N41", "faculty": "Simando III, Amador F.", "day": "MH", "days": ["MON", "THU"], "time": "16:15-17:45", "room": "A1103", "enrollCap": "40", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "HBIOANA", "section": "N01A", "faculty": "Ples, Michael B.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "A1103", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "HBIOANA", "section": "N02A", "faculty": "Ples, Michael B.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "A1103", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N01", "faculty": "Bagon, Bernadette B.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "V207", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N02", "faculty": "Bagon, Bernadette B.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "V207", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N03", "faculty": "Eguia, Maria Rowena R.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "V207", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N04", "faculty": "Eguia, Maria Rowena R.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-12:30", "room": "V207", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N05", "faculty": "Ramos, Gliceria B.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-12:30", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N06", "faculty": "Enriquez, Ma. Luisa D.", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "Y407", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N07", "faculty": "Enriquez, Ma. Luisa D.", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "Y408", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N08", "faculty": "Ramos, Gliceria B.", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N09", "faculty": "Ramos, Gliceria B.", "day": "TF", "days": ["TUE", "FRI"], "time": "16:15-17:45", "room": "Y407", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N10", "faculty": "Ramos, Gliceria B.", "day": "TF", "days": ["TUE", "FRI"], "time": "16:15-17:45", "room": "Y408", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N11", "faculty": "Bagon, Bernadette B.", "day": "TF", "days": ["TUE", "FRI"], "time": "16:15-17:45", "room": "V207", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INTRGEN", "section": "N12", "faculty": "Bagon, Bernadette B.", "day": "TF", "days": ["TUE", "FRI"], "time": "16:15-17:45", "room": "V207", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INDUBIO", "section": "N01", "faculty": "Eguia, Maria Rowena R.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "A1103", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "INDUBIO", "section": "N02", "faculty": "Eguia, Maria Rowena R.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "A1103", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "PATHOLO", "section": "N01", "faculty": "Espiritu, Gerard Anthony M.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "J107", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "ECOLGEN", "section": "N01", "faculty": "Dolojan, Dennis A.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-09:00", "room": "L111", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "GPHYSIO", "section": "N46", "faculty": "Gan, Rosita R.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "L331", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "DEVBIOL", "section": "N01", "faculty": "Ramos, Gliceria B.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-09:00", "room": "J107", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "IMMUNOL", "section": "N01A", "faculty": "Limson, Brian M.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-12:30", "room": "L111", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "IMMUNOL", "section": "N02A", "faculty": "Limson, Brian M.", "day": "MH", "days": ["MON", "THU"], "time": "18:00-19:30", "room": "J106", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "IMMUNOL", "section": "N03A", "faculty": "Limson, Brian M.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-09:00", "room": "J111", "enrollCap": "45", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "GPROMIC", "section": "N02", "faculty": "Lagman, Ma. Carmen A.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-16:00", "room": "C412", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "GPROMIC", "section": "N03", "faculty": "Lagman, Ma. Carmen A.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "C412", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LIFEDAT", "section": "N31", "faculty": "Pacheco, Paolo Ramon D.C", "day": "TF", "days": ["TUE", "FRI"], "time": "12:45-14:15", "room": "L309", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "MDENTOM", "section": "N01", "faculty": "Amarga, Ace Kevin S.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "Y507", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "MDENTOM", "section": "N02", "faculty": "Amarga, Ace Kevin S.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-16:00", "room": "Y508", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "MICROBE", "section": "N01", "faculty": "Uba, Marigold O.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "J307", "enrollCap": "", "mode": "", "restricted": false}, {"department": "BIOLOGY", "code": "PHYSIOP", "section": "N01", "faculty": "Ples, Michael B.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "J111", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "SYSTEMA", "section": "N01", "faculty": "Mandia, Emelina H.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "L315", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "SYSTEMA", "section": "N02", "faculty": "Licuanan, Wilfredo Roehl Y.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-09:00", "room": "A1103", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "SYSTEMA", "section": "N03", "faculty": "Mandia, Emelina H.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-09:00", "room": "L315", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "SYSTEMA", "section": "N04", "faculty": "Licuanan, Wilfredo Roehl Y.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-09:00", "room": "A1103", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "TERECOL", "section": "N01", "faculty": "Jose Santos Carandang VI", "day": "MH", "days": ["MON", "THU"], "time": "12:45-14:15", "room": "C412", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "THBIOL1", "section": "N31", "faculty": "Ples, Michael B.", "day": "WEDNESDAY", "days": ["WED"], "time": "07:30-09:30", "room": "M313", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "THSHBIO", "section": "N01", "faculty": "De Guia, Jessica Joyce R.", "day": "WEDNESDAY", "days": ["WED"], "time": "11:00-13:00", "room": "A1103", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "THSHBIO", "section": "N02", "faculty": "De Guia, Jessica Joyce R.", "day": "WEDNESDAY", "days": ["WED"], "time": "11:00-13:00", "room": "A1103", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "THSHBIO", "section": "N03", "faculty": "De Guia, Jessica Joyce R.", "day": "WEDNESDAY", "days": ["WED"], "time": "11:00-13:00", "room": "A1103", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "THSHBIO", "section": "N04", "faculty": "", "day": "THURSDAY", "days": ["THU"], "time": "14:30-16:30", "room": "A1403", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "THSHBIO", "section": "N05", "faculty": "", "day": "THURSDAY", "days": ["THU"], "time": "14:30-16:30", "room": "A1403", "enrollCap": "", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "VTENPRO", "section": "N40", "faculty": "Arellano, Bridget C.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-12:30", "room": "M305", "enrollCap": "30", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "VERTANA", "section": "N40A", "faculty": "Ples, Michael B.", "day": "TF", "days": ["TUE", "FRI"], "time": "09:15-10:45", "room": "J303", "enrollCap": "40", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI12", "section": "N26A", "faculty": "Dolojan, Dennis A.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C406", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI12", "section": "N26B", "faculty": "Dela Paz, Erica Silk P.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C409", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI12", "section": "N27A", "faculty": "Dolojan, Dennis A.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C406", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI12", "section": "N27B", "faculty": "Robles, Laurence E.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C409", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI12", "section": "N28A", "faculty": "Dolojan, Dennis A.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C409", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI12", "section": "N28B", "faculty": "Dela Paz, Erica Silk P.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C406", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI12", "section": "N29A", "faculty": "Amarga, Ace Kevin S.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C406", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N25A", "faculty": "Querubin, Florabelle D.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N25B", "faculty": "Sanchez, Joanna S.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N25C", "faculty": "Rosana, Albert Remus R.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N25D", "faculty": "Querubin, Florabelle D.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N25E", "faculty": "Santos, Jiaan Carlo E.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N25F", "faculty": "Yap, Jennifer Maries G.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N26A", "faculty": "Rosana, Albert Remus R.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N26B", "faculty": "Yap, Jennifer Maries G.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N26C", "faculty": "Uba, Marigold O.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N26D", "faculty": "Yap, Jennifer Maries G.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-10:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N26E", "faculty": "Rosana, Albert Remus R.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-14:00", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N26F", "faculty": "Santos, Jiaan Carlo E.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-14:00", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N27A", "faculty": "Torrejos, Yokimiko D.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N27B", "faculty": "Querubin, Florabelle D.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N27C", "faculty": "Santos, Jiaan Carlo E.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N27D", "faculty": "Yap, Jennifer Maries G.", "day": "WS", "days": ["WED", "SAT"], "time": "11:00-14:00", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N27E", "faculty": "Uba, Marigold O.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C211", "enrollCap": "20", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N27F", "faculty": "Mondragon, John Martin S.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N28A", "faculty": "Mondragon, John Martin S.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-10:30", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N28B", "faculty": "Mondragon, John Martin S.", "day": "WS", "days": ["WED", "SAT"], "time": "11:00-14:00", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N28C", "faculty": "Mondragon, John Martin S.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N28D", "faculty": "Querubin, Florabelle D.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N28E", "faculty": "Mondragon, John Martin S.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI16", "section": "N28F", "faculty": "Uba, Marigold O.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C208", "enrollCap": "15", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N25A", "faculty": "Orario, Hilarie P.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N25B", "faculty": "Mamauag, Antonio Samuel S.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N25C", "faculty": "Orario, Hilarie P.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N25D", "faculty": "Mamauag, Antonio Samuel S.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N25E", "faculty": "Benedicto, Jody M.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-10:30", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N25F", "faculty": "Santiago, Jane Abigail M.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-10:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N26A", "faculty": "Mamauag, Antonio Samuel S.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N26B", "faculty": "Swann, Priscilla Hope P.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N26C", "faculty": "Benedicto, Jody M.", "day": "WS", "days": ["WED", "SAT"], "time": "11:00-14:00", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N26D", "faculty": "Galvez, Julian Chris F.", "day": "WS", "days": ["WED", "SAT"], "time": "11:00-14:00", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": true}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N26E", "faculty": "Abeledo, Chona Camille V.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N26F", "faculty": "Lawsin, Nikko Lorenz P.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N27A", "faculty": "Orario, Hilarie P.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N27B", "faculty": "Galvez, Julian Chris F.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N27C", "faculty": "Benedicto, Jody M.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-14:00", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N27D", "faculty": "Lawsin, Nikko Lorenz P.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-14:00", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N27E", "faculty": "Benedicto, Jody M.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N27F", "faculty": "Santiago, Jane Abigail M.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N28A", "faculty": "Benedicto, Jody M.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N28B", "faculty": "Galvez, Julian Chris F.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N28C", "faculty": "Benedicto, Jody M.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "C408", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI17", "section": "N28D", "faculty": "Lawsin, Nikko Lorenz P.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "C410", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI26", "section": "N25A", "faculty": "Mandia, Emelina H.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "", "enrollCap": "", "mode": "", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI21", "section": "X23", "faculty": "", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-14:00", "room": "LB409", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI21", "section": "X23A", "faculty": "", "day": "WS", "days": ["WED", "SAT"], "time": "11:00-14:00", "room": "LB412", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI21", "section": "X23B", "faculty": "", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-14:00", "room": "LB409", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI21", "section": "XXB4", "faculty": "", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "LB412", "enrollCap": "", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBOBI22", "section": "N25A", "faculty": "Mercado, Van Jerwin P.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "ONLINE", "enrollCap": "", "mode": "FOL", "restricted": false}, {"department": "BIOLOGY", "code": "LBOBI22", "section": "N25B", "faculty": "Mercado, Van Jerwin P.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "ONLINE", "enrollCap": "", "mode": "FOL", "restricted": false}, {"department": "BIOLOGY", "code": "LBOBI22", "section": "N26A", "faculty": "Mercado, Van Jerwin P.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-10:30", "room": "ONLINE", "enrollCap": "", "mode": "FOL", "restricted": false}, {"department": "BIOLOGY", "code": "LBOBI22", "section": "N26B", "faculty": "Contreras, Anthony Joseph M.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "ONLINE", "enrollCap": "", "mode": "FOL", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI27", "section": "N25A", "faculty": "Pacheco, Paolo Ramon D.C", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "ONLINE", "enrollCap": "", "mode": "", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI31", "section": "N25A", "faculty": "Marquez, Jubert C.", "day": "MH", "days": ["MON", "THU"], "time": "11:00-14:00", "room": "ONLINE", "enrollCap": "", "mode": "POL", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI31", "section": "N25B", "faculty": "Marquez, Jubert C.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "ONLINE", "enrollCap": "", "mode": "POL", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI31", "section": "N26A", "faculty": "Marquez, Jubert C.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-10:30", "room": "ONLINE", "enrollCap": "", "mode": "POL", "restricted": false}, {"department": "BIOLOGY", "code": "LBOBI32", "section": "N25A", "faculty": "Santiago, Jane Abigail M.", "day": "MH", "days": ["MON", "THU"], "time": "07:30-10:30", "room": "ONLINE", "enrollCap": "", "mode": "FOL", "restricted": false}, {"department": "BIOLOGY", "code": "LBOBI32", "section": "N25B", "faculty": "Lagman, Ma. Carmen A.", "day": "TF", "days": ["TUE", "FRI"], "time": "11:00-14:00", "room": "ONLINE", "enrollCap": "", "mode": "FOL", "restricted": false}, {"department": "BIOLOGY", "code": "LBOBI32", "section": "N26A", "faculty": "Lagman, Ma. Carmen A.", "day": "WS", "days": ["WED", "SAT"], "time": "07:30-10:30", "room": "ONLINE", "enrollCap": "", "mode": "FOL", "restricted": false}, {"department": "BIOLOGY", "code": "LBYBI36", "section": "N25A", "faculty": "Ramos, Gliceria B.", "day": "TUESDAY", "days": ["TUE"], "time": "14:30-17:30", "room": "J204", "enrollCap": "", "mode": "", "restricted": false}, {"department": "BIOLOGY", "code": "LBYBI38", "section": "N26A", "faculty": "Uba, Marigold O.", "day": "THURSDAY", "days": ["THU"], "time": "07:30-10:30", "room": "J605", "enrollCap": "", "mode": "", "restricted": false}, {"department": "BIOLOGY", "code": "LBYBI38", "section": "N26B", "faculty": "Cantiller, Patricio Elvin L.", "day": "THURSDAY", "days": ["THU"], "time": "07:30-10:30", "room": "J607", "enrollCap": "", "mode": "", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI39", "section": "N25A", "faculty": "De Guia, Jessica Joyce R.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI39", "section": "N25B", "faculty": "Arellano, Bridget C.", "day": "TF", "days": ["TUE", "FRI"], "time": "07:30-10:30", "room": "", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI23", "section": "N26A", "faculty": "Simando III, Amador F.", "day": "TF", "days": ["TUE", "FRI"], "time": "14:30-17:30", "room": "SJ204", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBBBI14", "section": "N25A", "faculty": "Robles, Laurence E.", "day": "WS", "days": ["WED", "SAT"], "time": "11:00-14:00", "room": "C407", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBYBI19", "section": "N25A", "faculty": "Ramos, Gliceria B.", "day": "WS", "days": ["WED", "SAT"], "time": "11:00-14:00", "room": "C404", "enrollCap": "24", "mode": "HYBRID", "restricted": false}, {"department": "BIOLOGY", "code": "LBYBI47", "section": "N25A", "faculty": "Arellano, Bridget C.", "day": "MH", "days": ["MON", "THU"], "time": "14:30-17:30", "room": "J202", "enrollCap": "24", "mode": "HYBRID", "restricted": false}];

const state = {
  courses: EMBEDDED_COURSES,
  filtered: [],
  schedule: loadSchedule(),
  presets: loadPresets(),
  studentId: loadStudentId(),
  scheduleTitle: localStorage.getItem("cosfinder-schedule-title") || "",
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
  results: document.getElementById("results"),
  resultMeta: document.getElementById("resultMeta"),
  calendarGrid: document.getElementById("calendarGrid"),
  timeAxis: document.getElementById("timeAxis"),
  mobileSchedule: document.getElementById("mobileSchedule"),
  statusBar: document.getElementById("statusBar"),
  scheduleSummary: document.getElementById("scheduleSummary"),
  clearScheduleBtn: document.getElementById("clearScheduleBtn"),
  cardTemplate: document.getElementById("resultCardTemplate"),
  toast: document.getElementById("toast"),
  loginOverlay: document.getElementById("loginOverlay"),
  loginForm: document.getElementById("loginForm"),
  studentIdInput: document.getElementById("studentIdInput"),
  rememberIdInput: document.getElementById("rememberIdInput"),
  loginError: document.getElementById("loginError"),
  activeStudentId: document.getElementById("activeStudentId"),
  changeIdBtn: document.getElementById("changeIdBtn"),
  scheduleTitleInput: document.getElementById("scheduleTitleInput"),
  presetSelect: document.getElementById("presetSelect"),
  savePresetBtn: document.getElementById("savePresetBtn"),
  loadPresetBtn: document.getElementById("loadPresetBtn"),
  deletePresetBtn: document.getElementById("deletePresetBtn"),
  exportButtons: [...document.querySelectorAll("[data-export]")],
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
      const group = document.createElement("div");
      group.className = "compare-group";
      group.innerHTML = `<strong>${course.code}</strong><span>${codeCounts.get(course.code)} sections to compare</span>`;
      fragment.appendChild(group);
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
    addButton.addEventListener("click", () => {
      const id = uniqueId(course);
      if (!state.schedule.some(item => uniqueId(item) === id)) {
        state.schedule.push(course);
        saveSchedule();
        renderSchedule();
        burst(addButton);
        showToast(`${course.code} ${course.section || ""} added to your calendar.`);
      } else {
        showToast(`${course.code} ${course.section || ""} is already in your calendar.`);
      }
    });
    fragment.appendChild(node);
  }
  els.results.appendChild(fragment);
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

  const overlapSet = new Set();
  for (let i = 0; i < events.length; i++) {
    for (let j = i + 1; j < events.length; j++) {
      if (hasOverlap(events[i], events[j])) {
        overlapSet.add(events[i].unique);
        overlapSet.add(events[j].unique);
      }
    }
  }

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
  if (overlapSet.size) pills.push(`<span class="status-pill alert">${overlapSet.size} conflicting block${overlapSet.size === 1 ? "" : "s"}</span>`);
  else if (state.schedule.length) pills.push(`<span class="status-pill ok">No time conflicts detected</span>`);
  if (!state.schedule.length) els.statusBar.innerHTML = `<span class="status-pill">No courses added yet</span>`;
  else els.statusBar.innerHTML = pills.join("");
  renderScheduleSummary(events, overlapSet);
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

function renderScheduleSummary(events, overlapSet) {
  if (!els.scheduleSummary) return;
  if (!events.length) {
    els.scheduleSummary.innerHTML = `<div><strong>Start adding classes</strong><span>Your schedule summary will appear here.</span></div>`;
    return;
  }
  const ranges = events.map(ev => ev.range).filter(Boolean);
  const earliest = ranges.length ? Math.min(...ranges.map(r => r.start)) : null;
  const latest = ranges.length ? Math.max(...ranges.map(r => r.end)) : null;
  const dayCounts = CALENDAR_DAYS.map(day => [day, events.filter(ev => ev.dayCode === day).length]);
  const busiest = dayCounts.sort((a, b) => b[1] - a[1])[0];
  const online = state.schedule.filter(course => matchesMode(course, "ONLINE")).length;
  const hybrid = state.schedule.filter(course => matchesMode(course, "HYBRID")).length;
  const items = [
    ["Courses", state.schedule.length],
    ["Earliest", earliest === null ? "-" : hourToLabel(earliest)],
    ["Latest", latest === null ? "-" : hourToLabel(latest)],
    ["Busiest", busiest?.[1] ? `${formatDayLabel(busiest[0])} (${busiest[1]})` : "-"],
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

function init() {

  renderStudentId();
  requireLogin();
  if (els.scheduleTitleInput) els.scheduleTitleInput.value = state.scheduleTitle;
  renderFilters();
  applyFilters();
  renderSchedule();

  els.searchInput.addEventListener("input", applyFilters);
  els.departmentFilter.addEventListener("change", applyFilters);
  [els.dayFilter, els.timeFilter, els.modeFilter, els.restrictedOnlyFilter, els.noConflictFilter]
    .filter(Boolean)
    .forEach((control) => control.addEventListener("change", applyFilters));
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
  els.savePresetBtn?.addEventListener("click", saveCurrentPreset);
  els.loadPresetBtn?.addEventListener("click", loadSelectedPreset);
  els.deletePresetBtn?.addEventListener("click", deleteSelectedPreset);
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

function fileStem(format) {
  const title = scheduleTitle().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "cosfinder-schedule";
  const id = state.studentId || "student";
  return `${title}-${id}.${format}`;
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

function exportSchedule(format) {
  if (!state.schedule.length) {
    showToast("Add at least one class before saving your schedule.");
    return;
  }
  state.scheduleTitle = els.scheduleTitleInput?.value.trim() || state.scheduleTitle;
  localStorage.setItem("cosfinder-schedule-title", state.scheduleTitle);
  if (format === "png" || format === "jpg") exportImage(format);
  if (format === "xls") exportExcel();
  if (format === "pdf") exportPdf();
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

function exportExcel() {
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
  downloadBlob(new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8" }), fileStem("xls"));
  showToast("Excel schedule saved.");
}

function exportImage(format) {
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
    downloadBlob(blob, fileStem(format === "jpg" ? "jpg" : "png"));
    showToast(`${format.toUpperCase()} schedule saved.`);
  }, format === "jpg" ? "image/jpeg" : "image/png", 0.94);
}

function exportPdf() {
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
  downloadBlob(new Blob([pdf], { type: "application/pdf" }), fileStem("pdf"));
  showToast("PDF schedule saved.");
}

function makePdf(lines) {
  const escapePdf = (text) => String(text).replace(/[\\()]/g, "\\$&");
  const pageHeight = 792;
  const content = ["BT", "/F1 18 Tf", "56 742 Td", `(${escapePdf(lines[0])}) Tj`, "/F1 10 Tf", "0 -22 Td"];
  lines.slice(1, 42).forEach((line) => {
    content.push(`(${escapePdf(line.slice(0, 112))}) Tj`, "0 -15 Td");
  });
  content.push("ET");
  const stream = content.join("\n");
  const objects = [
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj\n",
    `3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 ${pageHeight}] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj\n`,
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
