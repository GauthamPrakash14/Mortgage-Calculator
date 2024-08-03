import FormComponent from "../components/FormComponent"
import HeadingComponent from "../components/Heading"

const FormContainer = () =>{
    return(
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <HeadingComponent/>
            <FormComponent/>
        </div>
    )
}

export default FormContainer