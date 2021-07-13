import React from "react";
const highlightRender = (props) => (
  <span style={{ backgroundColor: "#081726", color: "#f1f5f8" }}>
    {props.children}
  </span>
);
const TitleStyle = (props) => (
  <span style={{ fontFamily: "Garamond", fontSize: "2em" }}>
    {props.children}
  </span>
);

const project = {
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      title: "About",
      name: "about",
      type: "string",
    },
    {
      title: "Live URL",
      name: "link",
      type: "url",
    },
    {
      title: "Source Code Link",
      name: "codeLink",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Title", value: "title" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
              {
                title: "Highlight",
                value: "highlight",
                blockEditor: {
                  render: highlightRender,
                },
              },
            ],
          },
        },
        {
          type: "image",
        },
        {
          type: "code",
        },
      ],
    },
    {
      name: "titleImg",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      about: "about",
      imageUrl: "titleImg.asset.url",
    },
    prepare(selection) {
      const { title, about, imageUrl } = selection;
      return {
        title: title,
        subtitle: about ? about : "No description Available!!",
        media: <img src={imageUrl} alt={`img`} />,
      };
    },
  },
};
export default project;
