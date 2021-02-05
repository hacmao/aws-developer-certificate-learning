import {  listStudents } from "../graphql/queries";
import { createManager } from "../graphql/mutations";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Button,  Dialog, Classes, Intent } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

const IDialogState = {
    autoFocus: true,
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    enforceFocus: true,
    isOpen: true,
    usePortal: true,
};

const StudentNotInCourse = ({ courseId }) => {
    const [allStudent, setAllStudent] = useState([]);
    const [isOpen, setIsOpen] = useState({});
    const [isAdd, setIsAdd] = useState({});
    const [update, setUpdate] = useState(false);

    useEffect( () => {
        const fetch = async () => {
            console.log("fetch");
            try {
                const res = await API.graphql(graphqlOperation(listStudents));
                setAllStudent(res.data?.listStudents.items);
            } catch(e) {
                console.log(e);
            }
        }
        fetch();
    }, [courseId, isAdd]);
    
    // find student not in list by subtract all student already in course 
    var displayStudent = [];
    for (var i in allStudent) {
        var student = allStudent[i];
        var course = student.courses.items;
        displayStudent.push(student);
        for(var j in course) {
            if (courseId === course[j].course.id){
                displayStudent.pop();
                break;
            }
        }
    }

    const handleOpen = (id) => {
        isOpen[id] = true;
        setIsOpen(isOpen);
        setUpdate(!update);
    }

    const handleClose = (id) => {
        setIsOpen({});
    }

    const handleAdd = async (courseId, studentId) => {
        const data = {
            courseId: courseId,
            studentId: studentId
        }
        if (!isAdd[studentId]) {
            await API.graphql(graphqlOperation(createManager, {input: data}));
            isAdd[studentId] = true;
            handleClose();
            setIsAdd(isAdd);
            setUpdate(!update);
        }
    }

    return displayStudent.map(({ id, name, age, courses }) => { 
        return (
            <div key={id} style={{paddingLeft: '20px', paddingTop: '5px'}}>
                { !isAdd[id] && <Button icon="small-plus" small={true} onClick={() => { handleOpen(id); } }>
                    <b>{ name }</b>
                    </Button>
                }
                {isOpen[id] && <Dialog 
                        onClose={() => { handleClose(id);} }
                        title="Student"
                        {...IDialogState}
                    >
                        <div className={Classes.DIALOG_BODY}>
                            <p><b>Name: </b>{ name }</p>
                            <p><b>ID: </b>{ id }</p>
                            <p><b>Age: </b>{ age }</p>
                            <p><b>Course:</b>{ courses.items.map(({course}) => { return (<text> {course.name} </text>); }) }</p>
                        </div>
                        <div className={Classes.DIALOG_FOOTER}>
                            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                                <Button intent={Intent.PRIMARY} onClick={() => {handleAdd(courseId, id);}}> Add</Button>
                                <Button onClick={handleClose}>Close</Button>
                            </div>
                        </div> 
                    </Dialog>
                }
            </div>
            
        );
    }
    );
}

export default StudentNotInCourse;