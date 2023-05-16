

let member = {
	name: 'Daniel Persson', String,
	team: 'Karlstad BK', String,
	membershipExp: '2023-08-30', String,

}

let teams = [
	{
		name: 'Karlstad BK', String,
		games: [
			{
				date: '2023-05-16', String,
				opponents: 'Örebro BK', String,
				homeTeam: 'Karlstad BK', String,
				homeTeamGoals: 3, Number,
				awayTeamGoals: 2, Number,
			}
		]
	}
]
let teams2 = [
	{
		name: 'Karlstad BK', String,
		gamesPlayed: 44, Number,

	}
]

let soccerClub = {
	members: [
		{
			name: 'Daniel Persson', String,
			team: 'Karlstad BK', String,
			membershipExp: '2023-08-30', String,
		}
	],
	teams: [
		{
			name: 'Karlstad BK', String,
			games: [
				{
					date: '2023-05-16', String,
					opponents: 'Örebro BK', String,
					homeTeam: 'Karlstad BK', String,
					homeTeamGoals: 3, Number,
					awayTeamGoals: 2, Number,
				}
			]
		}
	],
}


let baraBoll = {
	members: [
		{
			name: 'Daniel Persson', String,
			team: [
				{
					name: 'Karlstad BK',
					startdate: '2022-03-08',
					endOfContract: '2025-03-08'
				}
			],
			membershipExp: '2023-08-30', String,
			statistics: {
				goals: 12, Number,
				assists: 10, Number,
			}
		}
	],
	games: [
		{
			date: '2023-05-16', String,
			opponents: 'Örebro BK', String,
			homeTeam: 'Karlstad BK', String,
			homeTeamGoals: 3, Number,
			awayTeamGoals: 2, Number,
		}
	],
}