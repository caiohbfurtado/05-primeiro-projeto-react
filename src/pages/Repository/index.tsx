import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/logo.svg';

import * as S from './styles';

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  open_issues_count: number;
  forks_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  html_url: string;
  id: number;
  title: string;
  user: {
    login: string;
  };
}

interface RouteParams {
  name: string;
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const { name } = useParams<RouteParams>();

  useEffect(() => {
    api.get<Repository>(`/repos/${name}`).then(res => setRepository(res.data));

    api.get<Issue[]>(`/repos/${name}/issues`).then(res => setIssues(res.data));
  }, [name]);

  return (
    <S.Container>
      <S.Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/" className="back">
          <FiChevronLeft size={16} />
          <strong>Voltar</strong>
        </Link>
      </S.Header>

      {repository && (
        <S.Content>
          <S.HeaderInfo>
            <img
              src={repository?.owner?.avatar_url}
              alt={repository?.owner?.login}
            />
            <div>
              <h1>{repository?.full_name}</h1>
              <p>{repository?.description}</p>
            </div>
          </S.HeaderInfo>

          <S.NumberInfos>
            <ul>
              <li>
                <h2>{repository?.stargazers_count}</h2>
                <span>Stars</span>
              </li>
              <li>
                <h2>{repository?.forks_count}</h2>
                <span>Forks</span>
              </li>
              <li>
                <h2>{repository?.open_issues_count}</h2>
                <span>Issues Abertas</span>
              </li>
            </ul>
          </S.NumberInfos>

          <S.IssuesList>
            {issues.map(item => (
              <a href={item?.html_url} key={item?.id}>
                <div>
                  <strong>{item?.title}</strong>
                  <p>{item?.user?.login}</p>
                </div>

                <FiChevronRight size={20} />
              </a>
            ))}
          </S.IssuesList>
        </S.Content>
      )}
    </S.Container>
  );
};

export default Repository;
