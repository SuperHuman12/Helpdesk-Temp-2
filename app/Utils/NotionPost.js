export default function NotionPost({ value, key }) {

    switch (value.type) {
        case "paragraph":
            return (
                <p key={key} className="text-lg">
                    {value.paragraph?.rich_text[0]?.plain_text}
                </p>
            );
        case "heading_1":
            return (
                <h1 key={key} className="text-2xl font-bold">
                    {value.heading_1?.rich_text[0]?.plain_text}
                </h1>
            );
        case "heading_2":
            return (
                <h2 key={key} className="text-xl font-bold">
                    {value.heading_2?.rich_text[0]?.plain_text}
                </h2>
            );
        case "heading_3":
            return (
                <h3 key={key} className="text-lg font-bold">
                    {value.heading_3?.rich_text[0]?.plain_text}
                </h3>
            );
        case "heading_4":
            return (
                <h4 key={key} className="text-md font-bold">
                    {value.heading_4?.rich_text[0]?.plain_text}
                </h4>
            );
        case "heading_5":
            return (
                <h5 key={key} className="text-sm font-bold">
                    {value.heading_5?.rich_text[0]?.plain_text}
                </h5>
            );
        case "heading_6":
            return (
                <h6 key={key} className="text-xs font-bold">
                    {value.heading_6?.rich_text[0]?.plain_text}
                </h6>
            );

        case "numbered_list_item":
            return (
                <li key={key} className="text-lg list-decimal">
                    {value.numbered_list_item?.rich_text[0]?.plain_text}
                </li>
            );



        case "bulleted_list_item":
            return (
                <li key={key} className="text-lg list-disc">
                    {value.bulleted_list_item?.rich_text[0]?.plain_text}
                </li>
            );

        case "table_of_contents":
            return (
                <div key={key} className="text-gray-500">
                    This is a table of contents block.
                </div>
            );

        case "image":
            return (
                <div key={key}>
                    <img
                        src={value.image.external.url}
                        alt={value.image.caption?.url}
                    />
                </div>
            );

        default:
            return null;
    }



}
