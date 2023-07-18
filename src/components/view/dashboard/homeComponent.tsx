
"use client"
import React, {useEffect} from 'react';
import Link from "next/link";
import dataTable from "../../common/dataTableComponent";
/* @ts-ignore */
const dataTableObj = new dataTable();

const dataTablefield = [
    {name: 'id', fieldName: 'ID' },
    {name: 'subject', fieldName: 'Subject' },
    {name: 'objectName', fieldName: 'Object Name' },
    {name: 'actualDate', fieldName: 'Actual Date' },
    {name: 'dateCreated', fieldName: 'Date Created' },
    {name: 'createdBy', fieldName: 'Created By' },
    {name: 'type', fieldName: 'Type' },
    {name: 'Severity', fieldName: 'Severity' },
    {name: 'dateNeeded', fieldName: 'Date Needed' }
  ]

  const data = [
    {id: 872391, subject: 'PAP Anthem Compliance/PAR Follow up', objectName: 'Lankfoard, Nakoshia', actualDate: '5/12/2022', dateCreated: '5/12/22', createdBy: 'Mallick, Subhojit', type: 'Patient', Severity: 'High', dateNeeded: '5/22/22' },
    {id: 881318, subject: 'PAP Anthem Compliance/PAR Follow up', objectName: 'Grima, Joshph C', actualDate: '6/12/2022', dateCreated: '6/12/22', createdBy: 'Mallick, Subhojit', type: 'Patient', Severity: 'High', dateNeeded: '6/22/22' },
    {id: 881244, subject: 'PAP Anthem Compliance/PAR Follow up', objectName: 'Hutchinson, Wallace E', actualDate: '6/12/2022', dateCreated: '6/12/22', createdBy: 'Mallick, Subhojit', type: 'Patient', Severity: 'High', dateNeeded: '6/22/22' },
    {id: 872391, subject: 'PAP Anthem Compliance/PAR Follow up', objectName: 'Lankfoard, Nakoshia', actualDate: '5/12/2022', dateCreated: '5/12/22', createdBy: 'Mallick, Subhojit', type: 'Patient', Severity: 'High', dateNeeded: '5/22/22' },
    {id: 881318, subject: 'PAP Anthem Compliance/PAR Follow up', objectName: 'Grima, Joshph C', actualDate: '6/12/2022', dateCreated: '6/12/22', createdBy: 'Mallick, Subhojit', type: 'Patient', Severity: 'High', dateNeeded: '6/22/22' },
    {id: 881244, subject: 'PAP Anthem Compliance/PAR Follow up', objectName: 'Hutchinson, Wallace E', actualDate: '6/12/2022', dateCreated: '6/12/22', createdBy: 'Mallick, Subhojit', type: 'Patient', Severity: 'High', dateNeeded: '6/22/22' },
    {id: 881244, subject: 'PAP Anthem Compliance/PAR Follow up', objectName: 'Hutchinson, Wallace E', actualDate: '6/12/2022', dateCreated: '6/12/22', createdBy: 'Mallick, Subhojit', type: 'Patient', Severity: 'High', dateNeeded: '6/22/22' },
    {id: 881244, subject: 'PAP Anthem Compliance/PAR Follow up', objectName: 'Hutchinson, Wallace E', actualDate: '6/12/2022', dateCreated: '6/12/22', createdBy: 'Mallick, Subhojit', type: 'Patient', Severity: 'High', dateNeeded: '6/22/22' },
    {id: 881244, subject: 'PAP Anthem Compliance/PAR Follow up', objectName: 'Hutchinson, Wallace E', actualDate: '6/12/2022', dateCreated: '6/12/22', createdBy: 'Mallick, Subhojit', type: 'Patient', Severity: 'High', dateNeeded: '6/22/22' },
    {id: 881244, subject: 'PAP Anthem Compliance/PAR Follow up', objectName: 'Hutchinson, Wallace E', actualDate: '6/12/2022', dateCreated: '6/12/22', createdBy: 'Mallick, Subhojit', type: 'Patient', Severity: 'High', dateNeeded: '6/22/22' },
    {id: 881244, subject: 'PAP Anthem Compliance/PAR Follow up', objectName: 'Hutchinson, Wallace E', actualDate: '6/12/2022', dateCreated: '6/12/22', createdBy: 'Mallick, Subhojit', type: 'Patient', Severity: 'High', dateNeeded: '6/22/22' },
    {id: 881244, subject: 'PAP Anthem Compliance/PAR Follow up', objectName: 'Hutchinson, Wallace E', actualDate: '6/12/2022', dateCreated: '6/12/22', createdBy: 'Mallick, Subhojit', type: 'Patient', Severity: 'High', dateNeeded: '6/22/22' },
    {id: 881244, subject: 'PAP Anthem Compliance/PAR Follow up', objectName: 'Hutchinson, Wallace E', actualDate: '6/12/2022', dateCreated: '6/12/22', createdBy: 'Mallick, Subhojit', type: 'Patient', Severity: 'High', dateNeeded: '6/22/22' }
  ]

function Dashboard() {
    useEffect(()=>{
        dataTableObj.returnResetTable(null, true, 1, 'desc', [], 'my-search');
      },[]);
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Dashboard</h1>
            </div>
            <section className="section dashboard">
                <div className="row">
                    <div className="col-8">
                        <div className="card pb-2">
                            <div className="card-body pb-0">
                                <h5 className="card-title">Announcements</h5>
                                <div className="news scroll-2">
                                    <div className="post-item clearfix">
                                        <p className="date badge bg-orange-light"><i className="bi bi-calendar-week me-1"></i> 10/01/2023</p>
                                        <img src="assets/img/news-1.jpg" alt="" />
                                        <h4><Link href="/">Nihil blanditiis at in nihil autem</Link></h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...</p>
                                    </div>

                                    <div className="post-item clearfix">
                                        <p className="date badge bg-orange-light"><i className="bi bi-calendar-week me-1"></i> 10/01/2023</p>
                                        <img src="assets/img/news-2.jpg" alt="" />
                                        <h4><Link href="/">Quidem autem et impedit</Link></h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout it has a more-or-less normal distribution...</p>
                                    </div>

                                    <div className="post-item clearfix">
                                        <p className="date badge bg-orange-light"><i className="bi bi-calendar-week me-1"></i> 10/01/2023</p>
                                        <img src="assets/img/news-2.jpg" alt="" />
                                        <h4><Link href="/">Quidem autem et impedit</Link></h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout it has a more-or-less normal distribution...</p>
                                    </div>

                                </div>

                                <div className="card-footer">
                                    <button className="btn btn-sm btn-primary">more...</button>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="col-4">
                        <div className="card pb-2">
                            <div className="card-body pb-0">
                                <h5 className="card-title">My Alerts</h5>
                                <div className="myalert scroll-2">
                                    <div className="post-item clearfix">
                                        <div className="badge bg-light text-dark"><i className="bi bi-calendar-week me-1"></i> 10/10/2022</div>
                                        <h4><Link href="/">Nihil blanditiis</Link></h4>
                                        <p>Sit recusandae non aspernatur laboriosam.</p>
                                    </div>
                                    <div className="post-item clearfix">
                                        <div className="badge bg-light text-dark"><i className="bi bi-calendar-week me-1"></i> 10/10/2022</div>
                                        <h4><Link href="/">Quidem autem et impedit</Link></h4>
                                        <p>Illo nemo neque maiores vitae officiis.</p>
                                    </div>

                                    <div className="post-item clearfix">
                                        <div className="badge bg-light text-dark"><i className="bi bi-calendar-week me-1"></i> 10/10/2022</div>
                                        <h4><Link href="/">Quidem autem et impedit</Link></h4>
                                        <p>Turos elan dries werona nande...</p>
                                    </div>

                                    <div className="post-item clearfix">
                                        <div className="badge bg-light text-dark"><i className="bi bi-calendar-week me-1"></i> 10/10/2022</div>
                                        <h4><Link href="/">Quidem autem et impedit</Link></h4>
                                        <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-sm btn-primary">more...</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card pb-4">
                            <div className="card-body pb-0">
                                <h5 className="card-title">My Tasks</h5>
                                <div className="news">
                                    <div className="sub-label-6 bg-dark-light">
                                        <h5><i className="bi bi-list-check me-1"></i> Task Criteria</h5>
                                        <form className="row g-3">
                                            <div className="col-md-3">
                                                <input type="date" className="form-control form-control-sm" placeholder="Date" />
                                            </div>
                                            <div className="col-md-3">
                                                <select id="inputState" className="form-select form-select-sm">
                                                    <option selected>Choose type</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div className="col-md-3">
                                                <select id="inputState" className="form-select form-select-sm">
                                                    <option selected>Select Time frame...</option>
                                                    <option>Today + Overdue</option>
                                                </select>
                                            </div>
                                            <div className="col-md-3">
                                                <button className="btn btn-sm btn-info"><i className="bi bi-search"></i> Search</button>
                                                <button className="btn btn-sm btn-secondary"><i className="bi bi-reply"></i> Reset</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tbl-gap">
                                        {dataTableObj.returnTable(dataTablefield, data, {}, 'my-search')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Dashboard;