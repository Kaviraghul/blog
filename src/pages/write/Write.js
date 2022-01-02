import TopBar from "../../components/topbar/TopBar"
import "./write.css"

export default function Write() {
    return (
        <>
          <TopBar/>
          <div className="write">
            <img className="writeImage" src="https://user-images.githubusercontent.com/41876764/94856480-e7b8b200-03e4-11eb-949d-c3a447b43df2.jpeg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                <label htmlFor="fileInput"  ><i class="writeIcon fas fa-plus"></i></label>
                    <input type= "file" id = "fileInput"  style={{display:"none"}}/>
                    <input type= "text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea type="text" className="writeInput writeText" placeholder="Write your blog content here"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
            </div>
        </>
    )
}
