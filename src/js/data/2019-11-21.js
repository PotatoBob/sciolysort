dataSetVersion = "2019-11-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].characterData = [
	{
		name: "Anatomy and Physiology",
		img: "c5DqpgX.png",
		opts: {
			type: ["life"],
			build: false
		}
	},
	{
		name: "Designer Genes",
		img: "c5DqpgX.png",
		opts: {
			type: ["life"],
			build: false
		}
	},
	{
		name: "Disease Detectives",
		img: "c5DqpgX.png",
		opts: {
			type: ["life"],
			build: false
		}
	},
	{
		name: "Ornithology",
		img: "c5DqpgX.png",
		opts: {
			type: ["life"],
			build: false
		}
	},
	{
		name: "Water Quality",
		img: "c5DqpgX.png",
		opts: {
			type: ["life"],
			build: false
		}
	},
	{
		name: "Astronomy",
		img: "c5DqpgX.png",
		opts: {
			type: ["earth"],
			build: false
		}
	},
	{
		name: "Dynamic Planet",
		img: "c5DqpgX.png",
		opts: {
			type: ["earth"],
			build: false
		}
	},
	{
		name: "Fossils",
		img: "c5DqpgX.png",
		opts: {
			type: ["earth"],
			build: false
		}
	},
	{
		name: "GeoLogic Mapping",
		img: "c5DqpgX.png",
		opts: {
			type: ["earth"],
			build: false
		}
	},
	{
		name: "Chem Lab",
		img: "c5DqpgX.png",
		opts: {
			type: ["science"],
			build: false
		}
	},
	{
		name: "Circuit Lab",
		img: "c5DqpgX.png",
		opts: {
			type: ["science"],
			build: false
		}
	},
	{
		name: "Forensics",
		img: "c5DqpgX.png",
		opts: {
			type: ["science"],
			build: false
		}
	},
	{
		name: "Machines",
		img: "c5DqpgX.png",
		opts: {
			type: ["science"],
			build: false
		}
	},
	{
		name: "Protein Modeling",
		img: "c5DqpgX.png",
		opts: {
			type: ["science"],
			build: false
		}
	},
	{
		name: "Sounds of Music",
		img: "c5DqpgX.png",
		opts: {
			type: ["science"],
			build: false
		}
	},
	{
		name: "Boomilever",
		img: "c5DqpgX.png",
		opts: {
			type: ["tech"],
			build: true
		}
	},
	{
		name: "Detector Building",
		img: "c5DqpgX.png",
		opts: {
			type: ["tech"],
			build: true
		}
	},
	{
		name: "Gravity Vehicle",
		img: "c5DqpgX.png",
		opts: {
			type: ["tech"],
			build: true
		}
	},
	{
		name: "Wright Stuff",
		img: "c5DqpgX.png",
		opts: {
			type: ["tech"],
			build: true
		}
	},
	{
		name: "Codebusters",
		img: "c5DqpgX.png",
		opts: {
			type: ["inquiry"],
			build: false
		}
	},
	{
		name: "Experimental Design",
		img: "c5DqpgX.png",
		opts: {
			type: ["inquiry"],
			build: false
		}
	},
	{
		name: "Ping-Pong Parachute",
		img: "c5DqpgX.png",
		opts: {
			type: ["inquiry"],
			build: true
		}
	},
	{
		name: "Write It Do It",
		img: "c5DqpgX.png",
		opts: {
			type: ["inquiry"],
			build: false
		}
	}
];

dataSet[dataSetVersion].options = [
	//by event category
	{
		name: "Filter by Event Catgory",
		key: "type",
		tooltip: "Check this to restrict to certain event categories", // optional
		//checked: boolean, // optional
		sub: [
			{
				name: "LIFE, PERSONAL & SOCIAL SCIENCE",
				key: "life",
				//tooltip: string, // optional
				//checked: boolean, // optional
			},
			{
				name: "EARTH AND SPACE SCIENCE",
				key: "earth",
				//tooltip: string, // optional
				//checked: boolean, // optional
			},
			{
				name: "PHYSICAL SCIENCE & CHEMISTRY",
				key: "science",
				//tooltip: string, // optional
				//checked: boolean, // optional
			},
			{
				name: "TECHNOLOGY & ENGINEERING",
				key: "tech",
				//tooltip: string, // optional
				//checked: boolean, // optional
			},
			{
				name: "INQUIRY & NATURE OF SCIENCE",
				key: "inquiry",
				//tooltip: string, // optional
				//checked: boolean, // optional
			},
		]
	},
	//by overlapping time slots
	//remove build events; simple
	{
		name: "Remove Build Events",
		key: "build",
		tooltip: "Check to remove ALL build events",
		checked: true
	}
	//remove lab events; simple
];