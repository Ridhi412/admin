import React, { Component } from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    FormGroup,
    Label,
    Input,
    Button,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    CustomInput,
} from 'reactstrap';
import classnames from 'classnames';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { db, auth, storage } from '../../helpers/firebase';

var docRef = db.collection('Global_Variables').doc('admitCard');

docRef
    .get()
    .then(function (doc) {
        if (doc.exists) {
            console.log('Document data:', doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log('No such document!');
        }
    })
    .catch(function (error) {
        console.log('Error getting document:', error);
    });

export const applicationForm1Query = async (
    paper1_date,
    paper1_time,
    paper2_date,
    paper2_time,
    stetDirectorSign,
    isAdmitCardAvailable
) => {
    try {
        var data = db.collection('Global_Variables').doc('admitCard');
        data.set({
            paper1_date: paper1_date,
            paper1_time: paper1_time,
            paper2_date: paper2_date,
            paper2_time: paper2_time,
            // stetDirectorSign,
            // "isAdmitCardAvailable":isAdmitCardAvailable,
        });
        console.log('success');
        // window.location.reload();
    } catch (error) {
        console.log('not success');
        console.log(error);
        alert(error.message);
    }
};

export const applicationForm2Query = async (isAdmitCardAvailable) => {
    try {
        var data = db.collection('Global_Variables').doc('admitCardAvailable');

        console.log('success state changed');
        data.set({
            isAdmitCardAvailable: isAdmitCardAvailable,
        });
        // window.location.reload();
    } catch (error) {
        console.log('not success');
        console.log(error);
        alert(error.message);
    }
};

class GenerateAdmitCard extends Component {
    state = {
        paper1_date: '',
        paper1_time: '',
        paper2_date: '',
        paper2_time: '',
        stetDirectorSign: '',
        isAdmitCardAvailable: true,
        // examDate: "",
        // resultDate: "",
        // todayDate: "",
    };

    applicationForm1 = () => {
        applicationForm1Query(
            this.state.paper1_date,
            this.state.paper1_time,
            this.state.paper2_date,
            this.state.paper2_time,
            this.state.stetDirectorSign,
            this.state.isAdmitCardAvailable
        );
    };

    applicationForm2 = () => {
        applicationForm2Query(this.state.isAdmitCardAvailable);
    };

    sendData = (event) => {
        console.log('sendData function', this.state);
        event.preventDefault();
        this.applicationForm1();
    };

    sendState = (event) => {
        console.log('sendData function', this.state);
        // event.preventDefault();
        this.applicationForm2();
    };

    render() {
        return (
            <React.Fragment>
                <h4 className="header-title">Generate Admit Cards</h4>

                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <FormGroup row>
                                    <Label for="fname" md={3}>
                                        Paper 1 date &amp; time
                                    </Label>
                                    <Col md={9}>
                                        <Row>
                                            <Col md={6}>
                                                <Input
                                                    type="Date"
                                                    name="paper1_date"
                                                    id="paper1_date"
                                                    placeholder="Enter Paper 1 date"
                                                    value={this.state.paper1_date}
                                                    onChange={(e) => {
                                                        this.setState({ paper1_date: e.target.value });
                                                        console.log(e.target.value);
                                                    }}
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <Input
                                                    type="Time"
                                                    name="paper1_time"
                                                    id="paper1_time"
                                                    placeholder="Enter Paper 1 time"
                                                    value={this.state.paper1_time}
                                                    onChange={(e) => {
                                                        this.setState({ paper1_time: e.target.value });
                                                        console.log(e.target.value);
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="fname" md={3}>
                                        Paper 2 date &amp; time
                                    </Label>
                                    <Col md={9}>
                                        <Row>
                                            <Col md={6}>
                                                <Input
                                                    type="Date"
                                                    name="paper2_date"
                                                    id="paper2_date"
                                                    placeholder="Enter Paper 2 date"
                                                    value={this.state.paper2_date}
                                                    onChange={(e) => {
                                                        this.setState({ paper2_date: e.target.value });
                                                        console.log(e.target.value);
                                                    }}
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <Input
                                                    type="Time"
                                                    name="paper2_time"
                                                    id="paper2_time"
                                                    placeholder="Enter Paper 2 time"
                                                    value={this.state.paper2_time}
                                                    onChange={(e) => {
                                                        this.setState({ paper2_time: e.target.value });
                                                        console.log(e.target.value);
                                                        console.log(this.state);
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="certdeg2" md={3}>
                                        Upload STET Director Signature
                                    </Label>
                                    <Col md={9}>
                                        <Input
                                            type="file"
                                            name="stetDirectorSign"
                                            id="stetDirectorSign"
                                            // placeholder="enter register no."
                                            value={this.state.stetDirectorSign}
                                            onChange={(e) => {
                                                this.setState({ stetDirectorSign: e.target.value });
                                                console.log(e.target.value);
                                            }}
                                        />
                                    </Col>
                                </FormGroup>

                                <div className="text-right">
                                    <Button className="pull-right" onClick={this.sendData} color="success">
                                        Generate
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <hr style={{ height: '1px', color: 'black', background: 'black' }} />

                <div class="row mt-5 mx-2">
                    <table className="table table-bordered" style={{ border: '1px solid #000' }}>
                        <Row>
                            {/* {console.log(this.state)} */}
                            <Col md={9}>
                                <h5 className="ml-3">Provide access to Admit Card for all Candidates</h5>
                            </Col>
                            <Col md={3}>
                                <CustomInput
                                    type="switch"
                                    id="exampleCustomSwitch"
                                    name="customSwitch"
                                    className="mt-2 mr-2 text-right"
                                    value={this.state.isAdmitCardAvailable}
                                    onChange={(e) => {
                                        this.setState({ isAdmitCardAvailable: !this.state.isAdmitCardAvailable });
                                        console.log(e.target.value);
                                        this.sendState();
                                        // alert('Global State Changed')
                                    }}
                                    // label="Turn on this custom switch"
                                />
                            </Col>
                        </Row>
                    </table>
                    {/* {console.log(this.state)} */}
                </div>
            </React.Fragment>
        );
    }
}

class AdmitCard extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: '1' };
        this.toggle = this.toggle.bind(this);
    }

    /**
     * Toggle the tab
     */
    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    };

    render() {
        const tabContents = [
            {
                id: '1',
                title: 'Generate Admit Cards',
                icon: 'uil-home-alt',
                text: <GenerateAdmitCard />,
            },
            {
                id: '2',
                title: 'View Generated Admit Cards',
                icon: 'uil-user',
                text: <GeneratedCards />,
            },
        ];

        return (
            <React.Fragment>
                <h3 className="header-title mb-3 mt-3">Admit Card</h3>
                <Card>
                    <CardBody>
                        {/* <h5 className="header-title mb-3 mt-0">Nav Pills</h5> */}
                        <Nav className="nav nav-pills navtab-bg nav-justified">
                            {tabContents.map((tab, index) => {
                                return (
                                    <NavItem key={index}>
                                        <NavLink
                                            href="#"
                                            className={classnames({ active: this.state.activeTab === tab.id })}
                                            onClick={() => {
                                                this.toggle(tab.id);
                                            }}>
                                            <i className={classnames(tab.icon, 'd-sm-none', 'd-block', 'mr-1')}></i>
                                            <span className="d-none d-sm-block">{tab.title}</span>
                                        </NavLink>
                                    </NavItem>
                                );
                            })}
                        </Nav>

                        <TabContent activeTab={this.state.activeTab}>
                            {tabContents.map((tab, index) => {
                                return (
                                    <TabPane tabId={tab.id} key={index}>
                                        <Row>
                                            <Col sm="12">
                                                <p className="mt-2">{tab.text}</p>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                );
                            })}
                        </TabContent>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

const records = [
    {
        id: 1,
        age: 32,
        name: 'Burt',
        company: 'Kaggle',
        phone: '+1 (823) 532-2427',
    },
    {
        id: 2,
        age: 23,
        name: 'Long',
        company: 'Magmina',
        phone: '+1 (813) 583-2089',
    },
    {
        id: 3,
        age: 31,
        name: 'Alvarado',
        company: 'Translink',
        phone: '+1 (975) 468-3875',
    },
    {
        id: 4,
        age: 24,
        name: 'Lilia',
        company: 'Digitalus',
        phone: '+1 (891) 537-3461',
    },
    {
        id: 5,
        age: 25,
        name: 'Amanda',
        company: 'Bunga',
        phone: '+1 (916) 522-3747',
    },
    {
        id: 6,
        age: 20,
        name: 'Alexandra',
        company: 'Conjurica',
        phone: '+1 (876) 492-3181',
    },
    {
        id: 7,
        age: 27,
        name: 'Diana',
        company: 'Extragen',
        phone: '+1 (977) 417-3038',
    },
    {
        id: 8,
        age: 26,
        name: 'Goodman',
        company: 'Aquamate',
        phone: '+1 (930) 545-2289',
    },
    {
        id: 9,
        age: 26,
        name: 'Edith',
        company: 'Pyrami',
        phone: '+1 (854) 506-3468',
    },
    {
        id: 10,
        age: 29,
        name: 'Juana',
        company: 'Singavera',
        phone: '+1 (872) 560-2324',
    },
    {
        id: 11,
        age: 21,
        name: 'Fitzgerald',
        company: 'Dancerity',
        phone: '+1 (813) 573-2507',
    },
    {
        id: 12,
        age: 38,
        name: 'Madden',
        company: 'Corpulse',
        phone: '+1 (935) 534-3876',
    },
    {
        id: 13,
        age: 40,
        name: 'Jewell',
        company: 'Frenex',
        phone: '+1 (886) 516-3262',
    },
    {
        id: 14,
        age: 32,
        name: 'Kerr',
        company: 'Artiq',
        phone: '+1 (807) 561-3077',
    },
    {
        id: 15,
        age: 20,
        name: 'Washington',
        company: 'Organica',
        phone: '+1 (948) 458-3517',
    },
    {
        id: 16,
        age: 20,
        name: 'Audrey',
        company: 'Softmicro',
        phone: '+1 (900) 592-3841',
    },
    {
        id: 17,
        age: 39,
        name: 'Allison',
        company: 'Playce',
        phone: '+1 (998) 478-3810',
    },
    {
        id: 18,
        age: 25,
        name: 'Holder',
        company: 'Paragonia',
        phone: '+1 (850) 536-2708',
    },
    {
        id: 19,
        age: 26,
        name: 'Atkinson',
        company: 'Scentric',
        phone: '+1 (850) 467-2761',
    },
    {
        id: 20,
        age: 35,
        name: 'Delaney',
        company: 'Telpod',
        phone: '+1 (934) 468-2218',
    },
    {
        id: 21,
        age: 20,
        name: 'Myrna',
        company: 'Zanity',
        phone: '+1 (953) 565-3836',
    },
    {
        id: 22,
        age: 30,
        name: 'Erna',
        company: 'Techade',
        phone: '+1 (872) 574-3879',
    },
    {
        id: 23,
        age: 36,
        name: 'Fannie',
        company: 'Cubix',
        phone: '+1 (843) 576-2904',
    },
    {
        id: 24,
        age: 38,
        name: 'Melody',
        company: 'Talae',
        phone: '+1 (817) 424-3500',
    },
    {
        id: 25,
        age: 27,
        name: 'Letitia',
        company: 'Enjola',
        phone: '+1 (857) 441-2917',
    },
    {
        id: 26,
        age: 33,
        name: 'Nina',
        company: 'Eventex',
        phone: '+1 (917) 599-2793',
    },
    {
        id: 27,
        age: 40,
        name: 'Byrd',
        company: 'Obones',
        phone: '+1 (846) 422-2064',
    },
    {
        id: 28,
        age: 34,
        name: 'Chen',
        company: 'Dadabase',
        phone: '+1 (956) 474-3409',
    },
    {
        id: 29,
        age: 25,
        name: 'Alexandria',
        company: 'Turnabout',
        phone: '+1 (964) 415-2278',
    },
    {
        id: 30,
        age: 37,
        name: 'Page',
        company: 'Metroz',
        phone: '+1 (897) 541-2460',
    },
    {
        id: 31,
        age: 24,
        name: 'Clare',
        company: 'Zilch',
        phone: '+1 (832) 591-3814',
    },
    {
        id: 32,
        age: 38,
        name: 'Lindsey',
        company: 'Roughies',
        phone: '+1 (942) 579-2920',
    },
    {
        id: 33,
        age: 32,
        name: 'Oconnor',
        company: 'Kinetica',
        phone: '+1 (899) 599-3206',
    },
    {
        id: 34,
        age: 35,
        name: 'Maldonado',
        company: 'Zentime',
        phone: '+1 (955) 419-2815',
    },
    {
        id: 35,
        age: 25,
        name: 'Day',
        company: 'Eargo',
        phone: '+1 (895) 555-2916',
    },
    {
        id: 36,
        age: 20,
        name: 'Collier',
        company: 'Phuel',
        phone: '+1 (998) 468-2079',
    },
    {
        id: 37,
        age: 40,
        name: 'Jeannette',
        company: 'Entogrok',
        phone: '+1 (904) 567-2078',
    },
    {
        id: 38,
        age: 33,
        name: 'Wallace',
        company: 'Nurali',
        phone: '+1 (877) 566-3957',
    },
    {
        id: 39,
        age: 39,
        name: 'Mcfadden',
        company: 'Cincyr',
        phone: '+1 (949) 405-3992',
    },
    {
        id: 40,
        age: 21,
        name: 'Chrystal',
        company: 'Futurize',
        phone: '+1 (988) 458-3032',
    },
    {
        id: 41,
        age: 31,
        name: 'Leila',
        company: 'Zensure',
        phone: '+1 (902) 447-2419',
    },
    {
        id: 42,
        age: 24,
        name: 'Madelyn',
        company: 'Egypto',
        phone: '+1 (881) 538-3081',
    },
    {
        id: 43,
        age: 39,
        name: 'Peck',
        company: 'Tellifly',
        phone: '+1 (803) 452-3922',
    },
    {
        id: 44,
        age: 32,
        name: 'Garrett',
        company: 'Aquasure',
        phone: '+1 (876) 475-2185',
    },
    {
        id: 45,
        age: 21,
        name: 'Kramer',
        company: 'Terrago',
        phone: '+1 (912) 404-2597',
    },
    {
        id: 46,
        age: 35,
        name: 'Lane',
        company: 'Anivet',
        phone: '+1 (911) 495-3587',
    },
    {
        id: 47,
        age: 21,
        name: 'Merritt',
        company: 'Inear',
        phone: '+1 (856) 519-3838',
    },
    {
        id: 48,
        age: 25,
        name: 'Margarita',
        company: 'Unq',
        phone: '+1 (931) 558-3156',
    },
    {
        id: 49,
        age: 28,
        name: 'Leigh',
        company: 'Marqet',
        phone: '+1 (918) 526-2007',
    },
    {
        id: 50,
        age: 31,
        name: 'Coleman',
        company: 'Insuresys',
        phone: '+1 (827) 449-3786',
    },
    {
        id: 51,
        age: 31,
        name: 'Alexander',
        company: 'Portico',
        phone: '+1 (854) 576-2455',
    },
    {
        id: 52,
        age: 38,
        name: 'Tanisha',
        company: 'Earthwax',
        phone: '+1 (994) 494-3496',
    },
    {
        id: 53,
        age: 23,
        name: 'Crane',
        company: 'Pushcart',
        phone: '+1 (924) 497-3347',
    },
    {
        id: 54,
        age: 26,
        name: 'Carmella',
        company: 'Acusage',
        phone: '+1 (898) 575-2585',
    },
    {
        id: 55,
        age: 27,
        name: 'Rosalind',
        company: 'Isologica',
        phone: '+1 (838) 572-2994',
    },
    {
        id: 56,
        age: 37,
        name: 'Duran',
        company: 'Gazak',
        phone: '+1 (991) 446-3820',
    },
    {
        id: 57,
        age: 27,
        name: 'Bernard',
        company: 'Zoinage',
        phone: '+1 (824) 585-2197',
    },
    {
        id: 58,
        age: 29,
        name: 'Tate',
        company: 'Endipine',
        phone: '+1 (896) 448-2084',
    },
    {
        id: 59,
        age: 39,
        name: 'Pearlie',
        company: 'Progenex',
        phone: '+1 (805) 545-2585',
    },
    {
        id: 60,
        age: 20,
        name: 'Manning',
        company: 'Handshake',
        phone: '+1 (917) 405-3406',
    },
];

const columns = [
    {
        dataField: 'id',
        text: 'ID',
        sort: true,
    },
    {
        dataField: 'name',
        text: 'Name',
        sort: true,
    },
    {
        dataField: 'phone',
        text: 'Phone Number',
        sort: false,
        searchable: false,
    },
    {
        dataField: 'age',
        text: 'Age',
        sort: true,
        searchable: false,
    },
    {
        dataField: 'company',
        text: 'Company',
        sort: false,
        searchable: false,
    },
];

const defaultSorted = [
    {
        dataField: 'id',
        order: 'asc',
    },
];

const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <React.Fragment>
        <label className="d-inline mr-1">Show</label>
        <Input
            type="select"
            name="select"
            id="no-entries"
            className="custom-select custom-select-sm d-inline col-1"
            defaultValue={currSizePerPage}
            onChange={(e) => onSizePerPageChange(e.target.value)}>
            {options.map((option, idx) => {
                return <option key={idx}>{option.text}</option>;
            })}
        </Input>
        <label className="d-inline ml-1">entries</label>
    </React.Fragment>
);

const AdvancedTable = () => {
    const { SearchBar } = Search;
    const { ExportCSVButton } = CSVExport;

    const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total ml-4">
            Showing {from} to {to} of {size} Results
        </span>
    );

    const paginationOptions = {
        paginationSize: 5,
        pageStartIndex: 1,
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        sizePerPageRenderer: sizePerPageRenderer,
        sizePerPageList: [
            {
                text: '5',
                value: 5,
            },
            {
                text: '10',
                value: 10,
            },
            {
                text: '25',
                value: 25,
            },
            {
                text: 'All',
                value: records.length,
            },
        ], // A numeric array is also available. the purpose of above example is custom the text
    };

    const CustomToggleList = ({ columns, onColumnToggle, toggles }) => (
        <UncontrolledDropdown className="mb-3">
            <DropdownToggle tag="button" className="btn btn-white">
                Select Columns <i className="uil uil-angle-down font-size-15 ml-1 align-middle"></i>
            </DropdownToggle>
            <DropdownMenu>
                {columns
                    .map((column) => ({
                        ...column,
                        toggle: toggles[column.dataField],
                    }))
                    .map((column) => (
                        <DropdownItem key={column.dataField} onClick={() => onColumnToggle(column.dataField)}>
                            {column.toggle && <i className="uil uil-check"></i>}
                            <span className="ml-2">{column.text}</span>
                        </DropdownItem>
                    ))}
            </DropdownMenu>
        </UncontrolledDropdown>
    );

    return (
        <Card>
            <CardBody>
                {/* <h4 className="header-title mt-0 mb-1">Search and Export</h4>
                <p className="sub-header">A Table allowing search and export the data in CSV format</p> */}

                <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={records}
                    columns={columns}
                    search
                    columnToggle
                    exportCSV={{ onlyExportFiltered: true, exportAll: false }}>
                    {(props) => (
                        <React.Fragment>
                            <Row>
                                <Col>
                                    <SearchBar {...props.searchProps} />
                                </Col>
                                <Col>
                                    <CustomToggleList {...props.columnToggleProps} />
                                </Col>
                                <Col className="text-right">
                                    <ExportCSVButton {...props.csvProps} className="btn btn-primary">
                                        Export CSV
                                    </ExportCSVButton>
                                </Col>
                            </Row>

                            <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                defaultSorted={defaultSorted}
                                pagination={paginationFactory(paginationOptions)}
                                wrapperClasses="table-responsive"
                                keyField="id"
                                data={records}
                                columns={columns}
                            />
                        </React.Fragment>
                    )}
                </ToolkitProvider>
            </CardBody>
        </Card>
    );
};

const GeneratedCards = () => {
    return (
        <React.Fragment>
            <h4 className="header-title mt-2">Generated Admit Cards</h4>

            <Row>
                <Col>
                    <AdvancedTable />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AdmitCard;
