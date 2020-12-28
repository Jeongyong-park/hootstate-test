const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'project-component',
				title: '프로젝트관리',
				translate: '프로젝트',
				type: 'collapse',
				icon: 'whatshot',
				children: [
					{
						id: 'project-create',
						title: '프로젝트 생성',
						type: 'item',
						url: '/app/project/item/new'
					},
					{
						id: 'project-list',
						title: '프로젝트 목록',
						type: 'item',
						url: '/app/project/list'
					}
				]
			}
		]
	},
	// {
	// 	id: 'map',
	// 	title: 'MAP',
	// 	translate: 'MAP',
	// 	type: 'group',
	// 	icon: 'apps',
	// 	children: [
	// 		{
	// 			id: 'ai-component',
	// 			title: '분석결과',
	// 			translate: '분석결과',
	// 			type: 'collapse',
	// 			icon: 'whatshot',
	// 			children: [
	// 				{
	// 					id: 'ai-map',
	// 					title: '재선충-항행장애물',
	// 					type: 'item',
	// 					url: '/app/map/inf'
	// 				},
	// 				{
	// 					id: 'ai-map-wc',
	// 					title: '월동작물',
	// 					type: 'item',
	// 					url: '/app/map/seg'
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	{
		id: 'admin',
		title: '관리자',
		translate: 'admin',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'admin-dashboard',
				title: '대시보드',
				type: 'item',
				icon: 'dashboard',
				url: '/app/admin/dashboard'

				// id: 'admin-component',
				// title: '관리자',
				// translate: '관리자',
				// type: 'collapse',
				// icon: 'whatshot',
				// children: [
				// 	{
				// 		id: 'admin-map',
				// 		title: '주제도 관리',
				// 		type: 'item',
				// 		url: '/app/admin/map'
				// 	}
				// ]
			},
			{
				id: 'admin-map',
				title: '주제도 관리',
				type: 'item',
				icon: 'map',
				url: '/app/admin/map'
			}
		]
	}
];

export default navigationConfig;
