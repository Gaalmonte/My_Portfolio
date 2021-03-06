import { Donut } from "react-awesome-shapes";
import { Diamond } from "react-awesome-shapes";
import { Circle } from "react-awesome-shapes";
import './background.css'

function Background(props) {
    return <div className="mobile-hide">
        <Donut
        color="#e4717e" size="160px"
        top={"40px"}
        left={"10px"}
        width={['40px', '40px', '60px', '60px']}
        zIndex={0}
        />
        <Donut
        color="#e4717e" size="190px"
        top={"30px"}
        right={"50px"}
        width={['40px', '40px', '60px', '60px']}
        zIndex={0}
        />
        <Donut
        color="#e4717e" size="150px"
        top={"260px"}
        right={"650px"}
        width={['40px', '40px', '60px', '60px']}
        zIndex={0}

        />
        <Diamond
        color="linear-gradient(135deg, #f8e5e5, #dfcbd0)"
        top={"120px"}
        right={"300px"}
        size={['0px', '0px', '0px', '20px']}
        zIndex={0}

        />
        <Diamond
        color="linear-gradient(135deg, #f8e5e5, #dfcbd0)"
        top={"350px"}
        right={"800px"}
        size={['0px', '0px', '0px', '80px']}
        zIndex={0}

        />
        <Diamond
        className="unwanted"
        color="linear-gradient(135deg, #f8e5e5, #dfcbd0)"
        top={"40px"}
        right={"600px"}
        size={['0px', '0px', '0px', '40px']}
        zIndex={0}

        />
        <Circle
        color="linear-gradient(135deg, #c39ea0, #b18f99)"
        top={"250px"}
        right={"100px"}
        size={['0px', '0px', '180px', '130px']}
        zIndex={0}

        />

        <Circle
        className="unwanted"
        color="linear-gradient(135deg, #c39ea0, #b18f99)"
        top={"340px"}
        right={"500px"}
        size={['0px', '0px', '180px', '180px']}
        zIndex={0}

        />
    </div>
}

export default Background;