import Input from "../../shared/components/FormElement/Input/Input";

const NewPost = () => {
  return (
    <div>
      <form>
        <Input
          element="input"
          type="text"
          placeholder="text"
          errorText="error"
        />
      </form>
    </div>
  );
};

export default NewPost;
