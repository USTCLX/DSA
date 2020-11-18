import { parseXml } from "./index";

describe("parseXml", () => {
  test("simple", () => {
    const xml = `
      <list>
        <item>content1</item>
        <item>content2</item>
        <item>content3</item>
        <item>
          <name>hema</name>
          <value>frontend</value>
        </item>
      </list>
    `;
    // 目标 json
    const json = {
      tag: "list",
      children: [
        {
          tag: "item",
          children: "content1"
        },
        {
          tag: "item",
          children: "content2"
        },
        {
          tag: "item",
          children: "content3"
        },
        {
          tag: "item",
          children: [
            {
              tag: "name",
              children: "hema"
            },
            {
              tag: "value",
              children: "frontend"
            }
          ]
        }
      ]
    };
    expect(parseXml(xml)).toEqual(json);
  });

  test("with props", () => {
    const xml = `<list>
      <item key="1">content1</item>
      <item key="2">content2</item>
      <item key="3">content3</item>
      <item key="4">
        <name id="hema-name">hema</name>
        <value id="hema-value">frontend</value>
      </item>
    </list>`;
    const json = {
      tag: "list",
      children: [
        {
          tag: "item",
          children: "content1",
          props: {
            key: "1"
          }
        },
        {
          tag: "item",
          children: "content2",
          props: {
            key: "2"
          }
        },
        {
          tag: "item",
          children: "content3",
          props: {
            key: "3"
          }
        },
        {
          tag: "item",
          children: [
            {
              tag: "name",
              children: "hema",
              props: {
                id: "hema-name"
              }
            },
            {
              tag: "value",
              children: "frontend",
              props: {
                id: "hema-value"
              }
            }
          ],
          props: {
            key: "4"
          }
        }
      ]
    };
    expect(parseXml(xml)).toEqual(json);
  });
});
