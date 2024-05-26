import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const StDetailWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 1200px;
  min-width: 780px;
  margin: 0 auto;
  padding: 10px;
`;
const StDetailTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
`;
const StDetailForm = styled.form`
  background-color: white;
  width: 800px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  row-gap: 20px;
  margin: 0 auto;
  border-radius: 20px;
`;
const StFormDBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
const StFormDInput = styled.input`
  border: 1px solid gray;
  border-radius: 10px;
  height: 30px;
  padding-left: 10px;
`;
const StFormDLabel = styled.label`
  font-weight: bold;
`;
const StButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const StBtn = styled.button`
  background-color: ${(props) => {
    switch (props.$text) {
      case 'update':
        return '#134effd9';
      case 'delete':
        return 'red';
      case 'gohome':
        return 'gray';
    }
  }};
  color: white;
  border: none;
  border-radius: 10px;
  width: 80px;
  height: 40px;
`;

const Detail = ({ data, setData }) => {
  const navigate = useNavigate();
  const params = useParams();
  //const { id, date, category, cost, description } = data;
  //console.log(typeof(params.id));
  // const [targetData, setTargetData] = useState(null);
  //console.log(targetData);
  //console.log(data)
  const dateRef = useRef(null);
  const categoryRef = useRef(null);
  const costRef = useRef(null);
  const descriptionRef = useRef(null);

  const filterTargetData = data.filter((item) => item.id === params.id);

  const deleteData = (id) => {
    alert('삭제되었습니다.');

    setData(data.filter((item) => item.id !== id));

    navigate('/'); // 저장 후 다시 홈으로
  };

  const updateData = (id) => {
    alert('수정되었습니다.');

    const updatedItem = {
      id,
      date: dateRef.current.value,
      category: categoryRef.current.value,
      cost: parseInt(costRef.current.value, 10),
      description: descriptionRef.current.value,
    };

    setData(data.map((item) => (item.id === id ? updatedItem : item)));

    navigate('/');
  };

  return (
    <div>
      <StDetailWrapper>
        <StDetailTitle>상세 내역 페이지</StDetailTitle>
        {filterTargetData.map((item) => (
          <StDetailForm key={item.id} onSubmit={() => updateData(params.id)}>
            <StFormDBox>
              <StFormDLabel htmlFor="date">날짜</StFormDLabel>
              <StFormDInput
                type="date"
                defaultValue={item.date}
                ref={dateRef}
                id="date"
              />
            </StFormDBox>
            <StFormDBox>
              <StFormDLabel htmlFor="category">항목</StFormDLabel>
              <StFormDInput
                type="text"
                defaultValue={item.category}
                ref={categoryRef}
                id="category"
              />
            </StFormDBox>
            <StFormDBox>
              <StFormDLabel htmlFor="cost">금액</StFormDLabel>
              <StFormDInput
                type="number"
                defaultValue={item.cost}
                ref={costRef}
                id="cost"
              />
            </StFormDBox>
            <StFormDBox>
              <StFormDLabel htmlFor="desc">내용</StFormDLabel>
              <StFormDInput
                type="text"
                defaultValue={item.description}
                ref={descriptionRef}
                id="desc"
              />
            </StFormDBox>

            <StButtonDiv>
              <StBtn
                type="submit"
                $text="update"
              >
                수정
              </StBtn>
              <StBtn
                type="button"
                $text="delete"
                onClick={() => deleteData(params.id)}
              >
                삭제
              </StBtn>
              <StBtn type="button" $text="gohome" onClick={() => navigate('/')}>
                뒤로가기
              </StBtn>
            </StButtonDiv>
          </StDetailForm>
        ))}
      </StDetailWrapper>
    </div>
  );
};

export default Detail;
