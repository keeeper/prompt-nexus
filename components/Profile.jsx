import PromptCard from "./PromptCard";

const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
  return (
    <section className="w-full">
      <h1 className="heading text-left">
        <span>{name}'s Profile</span>
      </h1>
      <p className="description text-left">{desc}</p>
      <div className="prompt-grid mt-10">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  )
}

export default Profile;