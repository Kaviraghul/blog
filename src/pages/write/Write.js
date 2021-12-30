import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <form className="writeForm">
                <div className="writeFormGroup">
                    <input type= "file" id = "fileinput" />
                    <input type= "text" placeholder="Title"/>
                </div>
            </form>
        </div>
    )
}
