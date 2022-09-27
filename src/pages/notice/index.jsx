import bigBanner from '../../images/notice/210927_빅배너_4 1.png';
import { useNavigate } from 'react-router-dom';
import {
  BigBanner,
  Container,
  BtnDiv,
  NoticeBtn,
  ReferenceBtn,
  TableDiv,
  Htr,
  Th,
  Btr,
  Tbody,
  Td,
  Thead,
} from './style';

const Notice = () => {
  const navigate = useNavigate();
  const columns = ['번호', '제목', '글쓴이', '작성일자'];
  const data = Array(53)
    .fill()
    .map(() => ({
      title: '번째 게시물',
      writer: '관리자',
      date: '2022. 09 . 26',
    }));

  return (
    <Container>
      <BigBanner src={bigBanner} alt="빅배너" />
      <BtnDiv>
        <NoticeBtn
          onClick={() => {
            navigate('/notice');
          }}
        >
          공지사항
        </NoticeBtn>
        <ReferenceBtn
          onClick={() => {
            navigate('/');
          }}
        >
          자료실
        </ReferenceBtn>
      </BtnDiv>
      <TableDiv>
        <table>
          <Thead>
            <Htr>
              {columns.map((column) => (
                <Th key={column}>{column}</Th>
              ))}
            </Htr>
          </Thead>
          <Tbody>
            {data.map(({ title, writer, date }, i) => (
              <Btr key={title + writer + date}>
                <Td>{i + 1}</Td>
                <Td>{i + 1 + title}</Td>
                <Td>{writer}</Td>
                <Td>{date}</Td>
              </Btr>
            ))}
          </Tbody>
        </table>
      </TableDiv>
    </Container>
  );
};

export default Notice;
