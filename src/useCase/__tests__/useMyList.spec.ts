import { Movie, MovieBuilder } from "../../models/Movie";
import { useMyList } from "../useMyList";

describe("マイリストのテスト", () => {
  // it("マイリストが0件の時、登録されるか", () => {
  //   const { toggleMyList, MyList } = useMyList();

  //   const addItem = new MovieBuilder().withId(1).build();
  //   toggleMyList(addItem);

  //   expect(MyList).toEqual(
  //     new Map([[1, new MovieBuilder().withId(1).build()]])
  //   );
  // });

  // it("登録されていない映画の場合、登録されるか", () => {
  //   const { toggleMyList, MyList } = useMyList();
  //   MyList.set(1, new MovieBuilder().withId(1).build());

  //   const addItem = new MovieBuilder().withId(2).build();
  //   toggleMyList(addItem);

  //   expect(MyList).toEqual(
  //     new Map([
  //       [1, new MovieBuilder().withId(1).build()],
  //       [2, new MovieBuilder().withId(2).build()],
  //     ])
  //   );
  // });

  // it("登録されている映画の場合、登録解除されるか", () => {
  //   const { toggleMyList, MyList } = useMyList();
  //   MyList.set(1, new MovieBuilder().withId(1).build());

  //   const addItem = new MovieBuilder().withId(1).build();
  //   toggleMyList(addItem);

  //   expect(MyList).toEqual(new Map());
  // });

  /**
   * Parameterized Test バージョン
   */
  type MyListInput = {
    currentMyList: Map<number, Movie>;
    inputItem: Movie;
    result: Map<number, Movie>;
  };

  it.each`
    currentMyList                                           | inputItem                               | result
    ${new Map()}                                            | ${new MovieBuilder().withId(1).build()} | ${new Map([[1, new MovieBuilder().withId(1).build()]])}
    ${new Map([[1, new MovieBuilder().withId(1).build()]])} | ${new MovieBuilder().withId(2).build()} | ${new Map([[1, new MovieBuilder().withId(1).build()], [2, new MovieBuilder().withId(2).build()]])}
    ${new Map([[1, new MovieBuilder().withId(1).build()]])} | ${new MovieBuilder().withId(1).build()} | ${new Map()}
  `(
    "初期値（$currentMyList）に対して Movie（$inputItem）が入力された時、最終的なマイリストは $result になる ",
    ({ currentMyList, inputItem, result }: MyListInput) => {
      const { toggleMyList, MyList } = useMyList();

      // given
      currentMyList.forEach((value, key) => {
        MyList.set(key, value);
      });

      // when
      toggleMyList(inputItem);

      // then
      expect(MyList).toEqual(result);
    }
  );
});
