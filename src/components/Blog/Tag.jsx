
export default function Tag({ tag }) {
  return (
    <h4 className="py-1 px-3 mx-1 rounded-lg inline-block text-white bg-indigo-700 mb-4 text-sm md:text-lg">
      {tag.name}
    </h4>
  )
}
