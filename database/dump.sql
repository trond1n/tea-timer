--
-- PostgreSQL database dump
--

-- Dumped from database version 13.16 (Debian 13.16-1.pgdg120+1)
-- Dumped by pg_dump version 16.3

-- Started on 2024-10-12 19:49:23

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: myuser
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO myuser;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 16399)
-- Name: infusion; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.infusion (
    id integer NOT NULL,
    c_infusion_number integer NOT NULL,
    c_infusion_time integer NOT NULL,
    id_tea integer NOT NULL
);


ALTER TABLE public.infusion OWNER TO myuser;

--
-- TOC entry 202 (class 1259 OID 16397)
-- Name: brew_time_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.brew_time_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.brew_time_id_seq OWNER TO myuser;

--
-- TOC entry 3134 (class 0 OID 0)
-- Dependencies: 202
-- Name: brew_time_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.brew_time_id_seq OWNED BY public.infusion.id;


--
-- TOC entry 210 (class 1259 OID 16465)
-- Name: brewing_history; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.brewing_history (
    id integer NOT NULL,
    tea_id integer,
    user_id integer,
    brew_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.brewing_history OWNER TO myuser;

--
-- TOC entry 209 (class 1259 OID 16463)
-- Name: brewing_history_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.brewing_history_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.brewing_history_id_seq OWNER TO myuser;

--
-- TOC entry 3135 (class 0 OID 0)
-- Dependencies: 209
-- Name: brewing_history_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.brewing_history_id_seq OWNED BY public.brewing_history.id;


--
-- TOC entry 206 (class 1259 OID 16426)
-- Name: favorite_teas; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.favorite_teas (
    user_id integer NOT NULL,
    tea_id integer NOT NULL
);


ALTER TABLE public.favorite_teas OWNER TO myuser;

--
-- TOC entry 215 (class 1259 OID 24701)
-- Name: infusion_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.infusion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.infusion_id_seq OWNER TO myuser;

--
-- TOC entry 3136 (class 0 OID 0)
-- Dependencies: 215
-- Name: infusion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.infusion_id_seq OWNED BY public.infusion.id;


--
-- TOC entry 212 (class 1259 OID 16484)
-- Name: interesting_facts; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.interesting_facts (
    id integer NOT NULL,
    fact text NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.interesting_facts OWNER TO myuser;

--
-- TOC entry 211 (class 1259 OID 16482)
-- Name: interesting_facts_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.interesting_facts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.interesting_facts_id_seq OWNER TO myuser;

--
-- TOC entry 3137 (class 0 OID 0)
-- Dependencies: 211
-- Name: interesting_facts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.interesting_facts_id_seq OWNED BY public.interesting_facts.id;


--
-- TOC entry 219 (class 1259 OID 32911)
-- Name: note; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.note (
    id integer NOT NULL,
    c_rating integer NOT NULL,
    id_tea integer NOT NULL,
    c_text_ integer NOT NULL
);


ALTER TABLE public.note OWNER TO myuser;

--
-- TOC entry 218 (class 1259 OID 32909)
-- Name: note_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.note_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.note_id_seq OWNER TO myuser;

--
-- TOC entry 3138 (class 0 OID 0)
-- Dependencies: 218
-- Name: note_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.note_id_seq OWNED BY public.note.id;


--
-- TOC entry 217 (class 1259 OID 32903)
-- Name: rating; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.rating (
    id integer NOT NULL,
    c_rating integer NOT NULL,
    id_tea integer NOT NULL,
    id_user integer NOT NULL
);


ALTER TABLE public.rating OWNER TO myuser;

--
-- TOC entry 216 (class 1259 OID 32901)
-- Name: rating_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.rating_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.rating_id_seq OWNER TO myuser;

--
-- TOC entry 3139 (class 0 OID 0)
-- Dependencies: 216
-- Name: rating_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.rating_id_seq OWNED BY public.rating.id;


--
-- TOC entry 201 (class 1259 OID 16387)
-- Name: tea; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.tea (
    id integer NOT NULL,
    name character varying NOT NULL,
    type character varying NOT NULL
);


ALTER TABLE public.tea OWNER TO myuser;

--
-- TOC entry 200 (class 1259 OID 16385)
-- Name: tea_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.tea_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tea_id_seq OWNER TO myuser;

--
-- TOC entry 3140 (class 0 OID 0)
-- Dependencies: 200
-- Name: tea_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.tea_id_seq OWNED BY public.tea.id;


--
-- TOC entry 208 (class 1259 OID 16443)
-- Name: tea_note; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.tea_note (
    id integer NOT NULL,
    id_tea integer,
    id_user integer,
    c_note_text character varying NOT NULL
);


ALTER TABLE public.tea_note OWNER TO myuser;

--
-- TOC entry 207 (class 1259 OID 16441)
-- Name: tea_note_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.tea_note_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tea_note_id_seq OWNER TO myuser;

--
-- TOC entry 3141 (class 0 OID 0)
-- Dependencies: 207
-- Name: tea_note_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.tea_note_id_seq OWNED BY public.tea_note.id;


--
-- TOC entry 214 (class 1259 OID 16668)
-- Name: tea_rating; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.tea_rating (
    id integer NOT NULL,
    "с_rating" integer NOT NULL,
    id_tea integer,
    id_user integer
);


ALTER TABLE public.tea_rating OWNER TO myuser;

--
-- TOC entry 213 (class 1259 OID 16666)
-- Name: tea_rating_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.tea_rating_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tea_rating_id_seq OWNER TO myuser;

--
-- TOC entry 3142 (class 0 OID 0)
-- Dependencies: 213
-- Name: tea_rating_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.tea_rating_id_seq OWNED BY public.tea_rating.id;


--
-- TOC entry 205 (class 1259 OID 16412)
-- Name: user; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    "passwordHash" character varying NOT NULL,
    username character varying NOT NULL,
    email character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."user" OWNER TO myuser;

--
-- TOC entry 204 (class 1259 OID 16410)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_id_seq OWNER TO myuser;

--
-- TOC entry 3143 (class 0 OID 0)
-- Dependencies: 204
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 2939 (class 2604 OID 16468)
-- Name: brewing_history id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.brewing_history ALTER COLUMN id SET DEFAULT nextval('public.brewing_history_id_seq'::regclass);


--
-- TOC entry 2935 (class 2604 OID 24709)
-- Name: infusion id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.infusion ALTER COLUMN id SET DEFAULT nextval('public.infusion_id_seq'::regclass);


--
-- TOC entry 2941 (class 2604 OID 16487)
-- Name: interesting_facts id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.interesting_facts ALTER COLUMN id SET DEFAULT nextval('public.interesting_facts_id_seq'::regclass);


--
-- TOC entry 2945 (class 2604 OID 32914)
-- Name: note id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.note ALTER COLUMN id SET DEFAULT nextval('public.note_id_seq'::regclass);


--
-- TOC entry 2944 (class 2604 OID 32906)
-- Name: rating id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.rating ALTER COLUMN id SET DEFAULT nextval('public.rating_id_seq'::regclass);


--
-- TOC entry 2934 (class 2604 OID 16390)
-- Name: tea id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.tea ALTER COLUMN id SET DEFAULT nextval('public.tea_id_seq'::regclass);


--
-- TOC entry 2938 (class 2604 OID 16446)
-- Name: tea_note id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.tea_note ALTER COLUMN id SET DEFAULT nextval('public.tea_note_id_seq'::regclass);


--
-- TOC entry 2943 (class 2604 OID 16671)
-- Name: tea_rating id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.tea_rating ALTER COLUMN id SET DEFAULT nextval('public.tea_rating_id_seq'::regclass);


--
-- TOC entry 2936 (class 2604 OID 16415)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 3118 (class 0 OID 16465)
-- Dependencies: 210
-- Data for Name: brewing_history; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.brewing_history (id, tea_id, user_id, brew_date) FROM stdin;
\.


--
-- TOC entry 3114 (class 0 OID 16426)
-- Dependencies: 206
-- Data for Name: favorite_teas; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.favorite_teas (user_id, tea_id) FROM stdin;
\.


--
-- TOC entry 3111 (class 0 OID 16399)
-- Dependencies: 203
-- Data for Name: infusion; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.infusion (id, c_infusion_number, c_infusion_time, id_tea) FROM stdin;
1	1	10	1
2	2	20	1
3	3	30	1
4	4	40	1
5	5	50	1
6	6	60	1
\.


--
-- TOC entry 3120 (class 0 OID 16484)
-- Dependencies: 212
-- Data for Name: interesting_facts; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.interesting_facts (id, fact, created_at) FROM stdin;
1	Tea is the second most consumed beverage in the world after water.	2024-08-31 05:10:36.939864
2	Green tea contains antioxidants that can improve brain function.	2024-08-31 05:10:36.939864
\.


--
-- TOC entry 3127 (class 0 OID 32911)
-- Dependencies: 219
-- Data for Name: note; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.note (id, c_rating, id_tea, c_text_) FROM stdin;
\.


--
-- TOC entry 3125 (class 0 OID 32903)
-- Dependencies: 217
-- Data for Name: rating; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.rating (id, c_rating, id_tea, id_user) FROM stdin;
\.


--
-- TOC entry 3109 (class 0 OID 16387)
-- Dependencies: 201
-- Data for Name: tea; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.tea (id, name, type) FROM stdin;
1	Да хун пао	улун
\.


--
-- TOC entry 3116 (class 0 OID 16443)
-- Dependencies: 208
-- Data for Name: tea_note; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.tea_note (id, id_tea, id_user, c_note_text) FROM stdin;
\.


--
-- TOC entry 3122 (class 0 OID 16668)
-- Dependencies: 214
-- Data for Name: tea_rating; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.tea_rating (id, "с_rating", id_tea, id_user) FROM stdin;
1	5	1	1
\.


--
-- TOC entry 3113 (class 0 OID 16412)
-- Dependencies: 205
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."user" (id, "passwordHash", username, email, created_at) FROM stdin;
1	$2b$10$.SGaKLodi2i76TtJuOIkh.pIv4BlMQSV0T6a5HF38NBuqsBr1wFy.	testuser	test@example.com	2024-09-21 05:19:47.452975
\.


--
-- TOC entry 3144 (class 0 OID 0)
-- Dependencies: 202
-- Name: brew_time_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.brew_time_id_seq', 6, true);


--
-- TOC entry 3145 (class 0 OID 0)
-- Dependencies: 209
-- Name: brewing_history_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.brewing_history_id_seq', 1, false);


--
-- TOC entry 3146 (class 0 OID 0)
-- Dependencies: 215
-- Name: infusion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.infusion_id_seq', 1, false);


--
-- TOC entry 3147 (class 0 OID 0)
-- Dependencies: 211
-- Name: interesting_facts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.interesting_facts_id_seq', 2, true);


--
-- TOC entry 3148 (class 0 OID 0)
-- Dependencies: 218
-- Name: note_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.note_id_seq', 1, false);


--
-- TOC entry 3149 (class 0 OID 0)
-- Dependencies: 216
-- Name: rating_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.rating_id_seq', 1, false);


--
-- TOC entry 3150 (class 0 OID 0)
-- Dependencies: 200
-- Name: tea_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.tea_id_seq', 2, true);


--
-- TOC entry 3151 (class 0 OID 0)
-- Dependencies: 207
-- Name: tea_note_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.tea_note_id_seq', 1, false);


--
-- TOC entry 3152 (class 0 OID 0)
-- Dependencies: 213
-- Name: tea_rating_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.tea_rating_id_seq', 1, true);


--
-- TOC entry 3153 (class 0 OID 0)
-- Dependencies: 204
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.user_id_seq', 1, true);


--
-- TOC entry 2965 (class 2606 OID 16673)
-- Name: tea_rating PK_6ef2c7a8e98fa86d29f4f74a1a2; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.tea_rating
    ADD CONSTRAINT "PK_6ef2c7a8e98fa86d29f4f74a1a2" PRIMARY KEY (id);


--
-- TOC entry 2969 (class 2606 OID 32916)
-- Name: note PK_96d0c172a4fba276b1bbed43058; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.note
    ADD CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY (id);


--
-- TOC entry 2967 (class 2606 OID 32908)
-- Name: rating PK_ecda8ad32645327e4765b43649e; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.rating
    ADD CONSTRAINT "PK_ecda8ad32645327e4765b43649e" PRIMARY KEY (id);


--
-- TOC entry 2951 (class 2606 OID 16675)
-- Name: user UQ_78a916df40e02a9deb1c4b75edb; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE (username);


--
-- TOC entry 2953 (class 2606 OID 16677)
-- Name: user UQ_e12875dfb3b1d92d7d7c5377e22; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);


--
-- TOC entry 2949 (class 2606 OID 16404)
-- Name: infusion brew_time_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.infusion
    ADD CONSTRAINT brew_time_pkey PRIMARY KEY (id);


--
-- TOC entry 2961 (class 2606 OID 16471)
-- Name: brewing_history brewing_history_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.brewing_history
    ADD CONSTRAINT brewing_history_pkey PRIMARY KEY (id);


--
-- TOC entry 2957 (class 2606 OID 16430)
-- Name: favorite_teas favorite_teas_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.favorite_teas
    ADD CONSTRAINT favorite_teas_pkey PRIMARY KEY (user_id, tea_id);


--
-- TOC entry 2963 (class 2606 OID 16493)
-- Name: interesting_facts interesting_facts_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.interesting_facts
    ADD CONSTRAINT interesting_facts_pkey PRIMARY KEY (id);


--
-- TOC entry 2959 (class 2606 OID 16452)
-- Name: tea_note tea_note_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.tea_note
    ADD CONSTRAINT tea_note_pkey PRIMARY KEY (id);


--
-- TOC entry 2947 (class 2606 OID 16396)
-- Name: tea tea_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.tea
    ADD CONSTRAINT tea_pkey PRIMARY KEY (id);


--
-- TOC entry 2955 (class 2606 OID 16421)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 2972 (class 2606 OID 16693)
-- Name: tea_note FK_1648573caaee767523c726a8a1f; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.tea_note
    ADD CONSTRAINT "FK_1648573caaee767523c726a8a1f" FOREIGN KEY (id_user) REFERENCES public."user"(id);


--
-- TOC entry 2976 (class 2606 OID 16683)
-- Name: tea_rating FK_43533f7d94688f3735548f4528e; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.tea_rating
    ADD CONSTRAINT "FK_43533f7d94688f3735548f4528e" FOREIGN KEY (id_user) REFERENCES public."user"(id);


--
-- TOC entry 2977 (class 2606 OID 16678)
-- Name: tea_rating FK_4a82a0de6217028118c9f8820f7; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.tea_rating
    ADD CONSTRAINT "FK_4a82a0de6217028118c9f8820f7" FOREIGN KEY (id_tea) REFERENCES public.tea(id);


--
-- TOC entry 2973 (class 2606 OID 16688)
-- Name: tea_note FK_a5b8502471bd52802e11fc34509; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.tea_note
    ADD CONSTRAINT "FK_a5b8502471bd52802e11fc34509" FOREIGN KEY (id_tea) REFERENCES public.tea(id);


--
-- TOC entry 2974 (class 2606 OID 16472)
-- Name: brewing_history brewing_history_tea_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.brewing_history
    ADD CONSTRAINT brewing_history_tea_id_fkey FOREIGN KEY (tea_id) REFERENCES public.tea(id) ON DELETE CASCADE;


--
-- TOC entry 2975 (class 2606 OID 16477)
-- Name: brewing_history brewing_history_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.brewing_history
    ADD CONSTRAINT brewing_history_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE;


--
-- TOC entry 2970 (class 2606 OID 16436)
-- Name: favorite_teas favorite_teas_tea_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.favorite_teas
    ADD CONSTRAINT favorite_teas_tea_id_fkey FOREIGN KEY (tea_id) REFERENCES public.tea(id) ON DELETE CASCADE;


--
-- TOC entry 2971 (class 2606 OID 16431)
-- Name: favorite_teas favorite_teas_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.favorite_teas
    ADD CONSTRAINT favorite_teas_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE;


--
-- TOC entry 3133 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: myuser
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2024-10-12 19:49:24

--
-- PostgreSQL database dump complete
--

