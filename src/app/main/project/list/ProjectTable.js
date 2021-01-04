//import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import {
	Checkbox,
	Icon,
	Table,
	TableBody,
	TableCell,
	TablePagination,
	TableRow,
	LinearProgress,
	Typography,
	Box,
	makeStyles,
	Avatar,
	Tooltip,
	IconButton,
	MenuItem,
	Menu,
	Chip, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Dialog
} from "@material-ui/core";
import { FlightLand } from '@material-ui/icons';
import { PineTreeIcon, RadishIcon, SeaWeedIcon } from 'app/main/libs/icons';
import moment from 'moment';
import 'moment/locale/ko';
import React, { useEffect, useState } from 'react';
//import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import { projectList } from '../../../services/projectService/index';
//import { useRecoilState, useRecoilValue } from 'recoil';
//import { ProjectState, ProjectSearchTextState, SelectedProjectState } from 'app/store/project/project';
//import { deleteProject } from '../../../services/projectService/index';
import ProjectTableHead from './ProjectTableHead';
import { useSnackbar } from "notistack";
import FuseScrollbars from '../../../../core/FuseScrollbars';

function ProjectTable(props) {
	const classes = useStyles();
	//const dispatch = useDispatch();
	// const searchText = useRecoilValue(ProjectSearchTextState);
	// const [aiProject, setAiProject] = useRecoilState(ProjectState);
	// const [selected, setSelected] = useRecoilState(SelectedProjectState);

	const [searchText] = React.useState('');
	const [aiProject, setAiProject] = React.useState([]);
	const [selected, setSelected] = React.useState([]);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [anchorMoreMenuEl, setAnchorMoreMenuEl] = useState(null);
	const [selectedNode, setSelectedNode] = useState(null);
	const [order, setOrder] = useState({
		direction: 'desc',
		id: null
	});
	const [open, setOpen] = useState(false);
	const { enqueueSnackbar } = useSnackbar();

	const getProjectListProc = async () => {
		const list = [];//await projectList();
		//setAiProject(list);
	};

	useEffect(() => {
		getProjectListProc();
	}, []);


	const handleMoreMenuClick = (event, node) => {
		setSelectedNode(node);
		setAnchorMoreMenuEl(event.currentTarget);
	};

	const handleMoreMenuClose = () => {
		setSelectedNode(null);
		setAnchorMoreMenuEl(null);
	};

	function handleRequestSort(event, property) {
		const id = property;
		let direction = 'desc';

		if (order.id === property && order.direction === 'desc') {
			direction = 'asc';
		}
		setOrder({
			direction,
			id
		});
	}

	function handleSelectAllClick(event) {
		if (event.target.checked) {
			setSelected(aiProject.map(n => n.projectId));
			return;
		}
		setSelected([]);
	}

	function handleInfoViewClick(item) {
		props.history.push(`/app/project/${item.projectId}/info`);
	}

	const handleDeleteShowDialog = () => {
		setAnchorMoreMenuEl(null);
		setOpen(true);
	};

	const handleDeleteProject = async () => {
		const { projectId } = selectedNode;
		const res = 500;//await deleteProject(projectId);
		if (res === 200) {
			enqueueSnackbar(`해당 프로젝트를 삭제 하였습니다.`, {
				variant: 'success'
			});
		} else {
			enqueueSnackbar(`해당 프로젝트 삭제를 실패 하였습니다.`, {
				variant: 'error'
			});
		}
		getProjectListProc();
		setOpen(false);
	};

	const handleDeleteDialogClose = () => {
		setOpen(false);
	};

	function handleCheck(id) {
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}
		setSelected(newSelected);
	}
	function handleImagesViewClick(item) {
		props.history.push(`/app/project/${item.projectId}/images`);
	}

	function handleClickMapResult(item) {
		props.history.push(`/app/map/uni/${item.projectId}`);
	}

	function handleChangePage(event, newPage) {
		setPage(newPage);
	}

	function handleChangeRowsPerPage(event) {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	}

	function LinearProgressWithLabel(props) {
		return (
			<Box display="flex" alignItems="center">
				<Box width="100%" mr={1}>
					<LinearProgress variant="determinate" {...props} color="secondary" />
				</Box>
				<Box minWidth={35}>
					<Typography variant="body2" color="textSecondary">{`${Math.round(props.value)}%`}</Typography>
				</Box>
			</Box>
		);
	}
	moment().locale('ko');
	return (
		<div className="w-full flex flex-col">
			<FuseScrollbars className="flex-grow overflow-x-auto">
				<Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
					<ProjectTableHead
						numSelected={selected.length}
						order={order}
						onSelectAllClick={handleSelectAllClick}
						onRequestSort={handleRequestSort}
						rowCount={aiProject.length}
					/>
					<TableBody>
						{aiProject.length !== undefined && _.orderBy(aiProject, [order.id], [order.direction])
							.filter(e => (searchText.length < 1 ? true : e.name.indexOf(searchText) > -1))
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map(project => {
								const isSelected = selected.indexOf(project.projectId) > -1;
								return (
									<TableRow
										className={['h-64', classes.tableRow].join(' ')}
										hover
										role="checkbox"
										aria-checked={isSelected}
										tabIndex={-1}
										key={project.projectId}
										selected={isSelected}
									>
										<TableCell className="w-40 md:w-64 text-center" padding="none">
											<Checkbox
												checked={isSelected}
												onClick={event => event.stopPropagation()}
												onChange={event => handleCheck(project.projectId)}
											/>
										</TableCell>
										<TableCell className="p-4 md:p-16" component="td" scope="row" align="center">
											{/* <ListItemAvatar> */}
											<AvatarByProjectType project={project} />
											{/* </ListItemAvatar> */}
										</TableCell>
										<TableCell
											className=""
											component="td"
											scope="row"
											align="left"
											style={{ padding: 0, margin: 0 }}
										>
											<div style={{ display: 'flex' }}>
												<div>{project.name}</div>
												<div className="RowHover">
													<Tooltip title="입력정보 조회">
														<IconButton onClick={() => handleInfoViewClick(project)}>
															<Icon>info</Icon>
														</IconButton>
													</Tooltip>
													<Tooltip title="업로드된 이미지 조회">
														<IconButton onClick={() => handleImagesViewClick(project)}>
															<Icon>collections</Icon>
														</IconButton>
													</Tooltip>
													{project.aiProgress === 100 && (
														<Tooltip title="결과 조회">
															<IconButton onClick={() => handleClickMapResult(project)}>
																<Icon>map</Icon>
															</IconButton>
														</Tooltip>
													)}
													<Tooltip title="더보기">
														<IconButton
															onClick={e => {
																handleMoreMenuClick(e, project);
															}}
														>
															<Icon>more_vert</Icon>
														</IconButton>
													</Tooltip>
												</div>
											</div>
										</TableCell>
										<TableCell className="p-4 md:p-16" component="td" scope="row" align="center">
											{project.isPublic ? (
												<Tooltip title="모두 보기">
													<Icon className="text-20">lock_open</Icon>
												</Tooltip>
											) : (
													<Tooltip title="나만 보기">
														<Icon className="text-20">lock</Icon>
													</Tooltip>
												)}
										</TableCell>
										<TableCell className="p-4 md:p-16" component="td" scope="row" align="center">
											{project.imageCount}
										</TableCell>
										<TableCell className="p-4 md:p-16" component="td" scope="row" align="center">
											<LinearProgressWithLabel value={project.aiProgress} />
										</TableCell>
										<TableCell className="p-4 md:p-16" component="td" scope="row" align="center">
											{moment(project.createdAt).format('lll')}
										</TableCell>
										<TableCell className="p-4 md:p-16" component="td" scope="row" align="center">
											{project.owner}
										</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</FuseScrollbars>

			{/* TODO - page count error 발생 */}
			<TablePagination
				className="flex-shrink-0 border-t-1"
				component="div"
				count={aiProject.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
			<Menu
				id="simple-menu"
				anchorEl={anchorMoreMenuEl}
				keepMounted
				open={Boolean(anchorMoreMenuEl)}
				onClose={handleMoreMenuClose}
			>
				<MenuItem onClick={() => handleInfoViewClick(selectedNode)}>조회/수정</MenuItem>
				<MenuItem onClick={() => handleDeleteShowDialog(selectedNode)}>삭제</MenuItem>
			</Menu>
			<Dialog
				open={open}
				onClose={handleDeleteDialogClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">해당 프로젝트를 삭제 하시겠습니까?</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						프로그램 삭제시 분석된 결과도 삭제 됩니다.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleDeleteDialogClose} color="primary" style={{ paddingRight: 20 }}>
						취소
					</Button>
					<Button onClick={handleDeleteProject} color="primary" style={{ paddingRight: 20 }}>
						삭제
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

//export default withRouter(ProjectTable);
export default ProjectTable;

const useStyles = makeStyles(() => ({
	PineNematode: { color: '#fff!important', backgroundColor: '#367755' },
	NavigationWarning: { color: '#fff!important', backgroundColor: '#006994' },
	WinterCrops: { color: '#fff!important', backgroundColor: '#A7BD00' },
	DefaultAvata: { color: '#fff!important', backgroundColor: '#aaa' },
	tableRow: {
		'&>td': {
			position: 'relative'
		},
		'&>td .RowHover': {
			display: 'none'
		},
		'&:hover>td .RowHover': {
			display: 'block',
			position: 'absolute',
			top: 0,
			height: '100%',
			width: '100%',
			backgroundColor: '#F0F7F7',
			padding: '10px 0'
			// '&>*': {
			// 	margin: theme.spacing(1)
			// }
		}
	}
}));

const AvatarByProjectType = ({ project }) => {
	const classes = useStyles();

	switch (project.modelType) {
		case 'PN':
			return (
				<Tooltip title="소나무 재선충 탐지 모델 버전1">
					<Chip
						avatar={
							<Avatar className={classes.PineNematode}>
								<PineTreeIcon />
							</Avatar>
						}
						label="소나무 재선충"
						variant="outlined"
					/>
				</Tooltip>
			);
		case 'NW':
			return (
				<Tooltip title="괭생이모자반 탐지 모델">
					<Chip
						avatar={
							<Avatar className={classes.NavigationWarning}>
								<SeaWeedIcon />
							</Avatar>
						}
						label="괭생이모자반"
						variant="outlined"
					/>
				</Tooltip>
			);
		case 'WC':
			return (
				<Tooltip title="월동작물 탐지 모델">
					<Chip
						avatar={
							<Avatar className={classes.WinterCrops}>
								<RadishIcon />
							</Avatar>
						}
						label="월동작물"
						variant="outlined"
					/>
				</Tooltip>
			);
		default:
			return (
				<Chip
					avaata={
						<Avatar className={classes.DefaultAvata}>
							<FlightLand />
						</Avatar>
					}
					label="Loading..."
				/>
			);
	}
};
